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

    useEffect(() => {
        if (content.seo?.title) {
            document.title = content.seo.title;
        }
    }, [content]);

    useEffect(() => {
        if (!content.seo?.description) {
            return;
        }
        const meta = document.querySelector('meta[name="description"]');
        if (meta) {
            meta.setAttribute('content', content.seo.description);
        }
    }, [content]);

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    useEffect(() => {
        if (!content.seo) {
            return;
        }
        const setMeta = (selector, value) => {
            const meta = document.querySelector(selector);
            if (meta && value) {
                meta.setAttribute('content', value);
            }
        };

        setMeta('meta[property="og:title"]', content.seo.title);
        setMeta('meta[property="og:description"]', content.seo.description);
        setMeta('meta[name="twitter:title"]', content.seo.title);
        setMeta('meta[name="twitter:description"]', content.seo.description);
    }, [content]);

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
