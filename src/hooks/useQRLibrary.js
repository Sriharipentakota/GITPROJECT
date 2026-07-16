import { useState, useCallback } from 'react';
import { QR_LIBRARY_STORAGE_KEY } from '../constants';

function generateId() {
  return `qr_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

function loadLibrary() {
  try {
    const raw = localStorage.getItem(QR_LIBRARY_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* ignore */ }
  return [];
}

function saveLibrary(items) {
  try {
    localStorage.setItem(QR_LIBRARY_STORAGE_KEY, JSON.stringify(items));
  } catch { /* ignore */ }
}

export function useQRLibrary() {
  const [items, setItems] = useState(loadLibrary);

  const mutate = useCallback((fn) => {
    setItems(prev => {
      const next = fn(prev);
      saveLibrary(next);
      return next;
    });
  }, []);

  const saveQR = useCallback((entry) => {
    const now = Date.now();
    if (entry.id) {
      // Update existing
      mutate(prev => prev.map(item =>
        item.id === entry.id
          ? { ...item, ...entry, updatedAt: now }
          : item
      ));
      return entry.id;
    } else {
      // New entry
      const id = generateId();
      const newItem = {
        id,
        name: entry.name || 'Untitled QR',
        description: entry.description || '',
        templateId: entry.templateId || 'text',
        content: entry.content || '',
        dataURL: entry.dataURL || '',
        customization: entry.customization || {},
        templateData: entry.templateData || {},
        generatedUrl: entry.generatedUrl || '',
        uploadService: entry.uploadService || '',
        tags: entry.tags || [],
        favorite: false,
        createdAt: now,
        updatedAt: now
      };
      mutate(prev => [newItem, ...prev]);
      return id;
    }
  }, [mutate]);

  const deleteQR = useCallback((id) => {
    mutate(prev => prev.filter(item => item.id !== id));
  }, [mutate]);

  const duplicateQR = useCallback((id) => {
    const now = Date.now();
    mutate(prev => {
      const original = prev.find(item => item.id === id);
      if (!original) return prev;
      const copy = { ...original, id: generateId(), name: `${original.name} (copy)`, createdAt: now, updatedAt: now, favorite: false };
      return [copy, ...prev];
    });
  }, [mutate]);

  const toggleFavorite = useCallback((id) => {
    mutate(prev => prev.map(item =>
      item.id === id ? { ...item, favorite: !item.favorite, updatedAt: Date.now() } : item
    ));
  }, [mutate]);

  const renameQR = useCallback((id, name) => {
    mutate(prev => prev.map(item =>
      item.id === id ? { ...item, name, updatedAt: Date.now() } : item
    ));
  }, [mutate]);

  const reload = useCallback(() => {
    setItems(loadLibrary());
  }, []);

  return { items, saveQR, deleteQR, duplicateQR, toggleFavorite, renameQR, reload };
}
