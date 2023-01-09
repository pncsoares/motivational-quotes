import { useEffect } from 'react';
import { LOCAL_STORAGE_THEME_NAME } from '../../constants/local-storage.constants';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import Layout from '../../layout';

export default function App() {
  const { getItem } = useLocalStorage();

  useEffect(() => {
    setTheme();
  }, []);

  const setTheme = () => {
    let selectedTheme: string = import.meta.env.VITE_LIGHT_THEME;
    const savedTheme = getItem(LOCAL_STORAGE_THEME_NAME);

    if (savedTheme) {
      selectedTheme = savedTheme;
    }

    const htmlTag = document.documentElement;
    htmlTag.setAttribute('data-theme', selectedTheme);
  };

  return (
    <>
      <div className="font-serif">
        <Layout />
      </div>
    </>
  );
}
