import { useState, useEffect } from 'react';

export function useScreenSize(props) {
  const [screenSize, setScreenSize] = useState('');

  function getStyleClassName(screenSize) {
    switch (screenSize) {
      case 'small':
        return props.small;
      case 'medium':
        return props.medium;
      case 'large':
          return props.large;
      default:
        return props.small;
    }
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 600) {
        setScreenSize('small');
      } else if (width < 800) {
        setScreenSize('medium');
      } else {
        setScreenSize('large');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Verificar el tamaño de pantalla al cargar la página

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return getStyleClassName(screenSize);
}
