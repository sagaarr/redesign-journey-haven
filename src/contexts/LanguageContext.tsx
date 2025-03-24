
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'hi' | 'mr';

// Define translations for various parts of the UI
type Translations = {
  [key in Language]: {
    navLinks: {
      home: string;
      about: string;
      initiatives: string;
      blog: string;
      getInvolved: string;
    };
    walkRight: string;
  };
};

const translations: Translations = {
  en: {
    navLinks: {
      home: 'Home',
      about: 'About Us',
      initiatives: 'Initiatives',
      blog: 'Blog',
      getInvolved: 'Get Involved',
    },
    walkRight: 'Walk Right',
  },
  hi: {
    navLinks: {
      home: 'होम',
      about: 'हमारे बारे में',
      initiatives: 'पहल',
      blog: 'ब्लॉग',
      getInvolved: 'शामिल हों',
    },
    walkRight: 'वॉक राइट',
  },
  mr: {
    navLinks: {
      home: 'मुख्यपृष्ठ',
      about: 'आमच्याबद्दल',
      initiatives: 'उपक्रम',
      blog: 'ब्लॉग',
      getInvolved: 'सहभागी व्हा',
    },
    walkRight: 'वॉक राइट',
  },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Function to get translations based on nested keys
  const t = (key: string): string => {
    const keys = key.split('.');
    let result: any = translations[language];
    
    for (const k of keys) {
      if (result[k] === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
      result = result[k];
    }
    
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
