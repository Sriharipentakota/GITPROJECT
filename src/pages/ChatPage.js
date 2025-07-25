import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const ChatPage = () => {
  const { chatId } = useParams();
  const { user, messages, dispatch } = useAppContext();
  const [newMessage, setNewMessage] = useState('');
  const [chatPartner, setChatPartner] = useState(null);
  const messagesEndRef = useRef(null);

  // Mock chat data
  useEffect(() => {
    const mockMessages = [
      {
        id: '1',
        senderId: 'instructor-john-doe',
        senderName: 'John Doe',
        content: 'Hi! Thanks for booking the React Development lesson. Looking forward to our session!',
        timestamp: new Date(2024, 0, 18, 10, 30),
        type: 'text'
      },
      {
        id: '2',
        senderId: user?.id,
        senderName: user?.name,
        content: 'Hello! I\'m excited to learn React. Can we cover hooks in detail?',
        timestamp: new Date(2024, 0, 18, 10, 35),
        type: 'text'
      },
      {
        id: '3',
        senderId: 'instructor-john-doe',
        senderName: 'John Doe',
        content: 'Absolutely! We\'ll cover useState, useEffect, and custom hooks. I\'ll also share some best practices.',
        timestamp: new Date(2024, 0, 18, 10, 40),
        type: 'text'
      }
    ];

    dispatch({ type: 'SET_MESSAGES', payload: mockMessages });

    // Set chat partner based on chatId
    if (chatId) {
      setChatPartner({
        id: 'instructor-john-doe',
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/150/6366f1/ffffff?text=JD',
        status: 'online'
      });
    }
  }, [chatId, dispatch, user]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now().toString(),
      senderId: user?.id,
      senderName: user?.name,
      content: newMessage,
      timestamp: new Date(),
      type: 'text'
    };

    dispatch({ type: 'ADD_MESSAGE', payload: message });
    setNewMessage('');

    // Simulate instructor response
    setTimeout(() => {
      const response = {
        id: (Date.now() + 1).toString(),
        senderId: 'instructor-john-doe',
        senderName: 'John Doe',
        content: 'Thanks for your message! I\'ll get back to you shortly.',
        timestamp: new Date(),
        type: 'text'
      };
      dispatch({ type: 'ADD_MESSAGE', payload: response });
    }, 2000);
  };

  const formatTime = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const isMyMessage = (message) => {
    return message.senderId === user?.id;
  };

  if (!chatId) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="text-center">
            <div className="text-6xl mb-4">💬</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Messages</h1>
            <p className="text-gray-600">Select a conversation to start messaging</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto h-96">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center">
            <img
              src={chatPartner?.avatar}
              alt={chatPartner?.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {chatPartner?.name}
              </h3>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-sm text-gray-500">{chatPartner?.status}</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${isMyMessage(message) ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  isMyMessage(message)
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p
                  className={`text-xs mt-1 ${
                    isMyMessage(message) ? 'text-blue-100' : 'text-gray-500'
                  }`}
                >
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="border-t border-gray-200 p-4">
          <form onSubmit={handleSendMessage} className="flex space-x-4">
            <div className="flex-1">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <button
              type="submit"
              disabled={!newMessage.trim()}
              className="p-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;