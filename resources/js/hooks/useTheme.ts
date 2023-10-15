
import { useState, useEffect } from "react";
 
export const useDarkSide = () => {

    const [theme, setTheme] = useState<'dark' | 'light'>(!!localStorage.theme ? localStorage.theme : 'light');
  

    useEffect(() => {
        const root = window.document.documentElement;
        if(theme === 'light') {
          root.classList.remove('dark');
        } else {
          root.classList.add('dark');
        }
        
        localStorage.setItem('theme', theme);

    }, [theme]);
 
    return {
      theme, 
      setTheme
    }
}
