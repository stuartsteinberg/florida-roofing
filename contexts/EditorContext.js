import React, { createContext, useContext, useState } from 'react';

// Create the context
const ContentContext = createContext();

// Create the provider component
export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState('');

  return (
    <ContentContext.Provider value={{ content, setContent }}>
      {children}
    </ContentContext.Provider>
  );
};

// Custom hook to use the context
export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};