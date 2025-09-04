import { createContext, useContext, useState } from 'react';

const UIContext = createContext();

/**
 * UI context provider
 * Manages global UI state like modals, notifications, and theme
 */
export function UIProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const addNotification = (message, type = 'info') => {
    const id = Date.now().toString();
    const notification = { id, message, type };
    setNotifications(prev => [...prev, notification]);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      removeNotification(id);
    }, 5000);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const value = {
    notifications,
    addNotification,
    removeNotification,
    isModalOpen,
    modalContent,
    openModal,
    closeModal,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}