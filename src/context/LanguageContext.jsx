import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import frContent from '../i18n/fr.json';
import enContent from '../i18n/en.json';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'portfolio-lang';

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored === 'en' ? 'en' : 'fr';   // fr par défaut
    });
    const content = useMemo(() => {
        return lang === 'fr' ? frContent : enContent;
    }, [lang]);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, lang);
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, setLang, content }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
}
