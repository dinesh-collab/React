import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useStatusBar = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.body.style.backgroundColor = '#FFFFFF'; // White
        break;
      case '/about':
        document.body.style.backgroundColor = '#ADD8E6'; // Light Blue
        break;
      case '/contact':
        document.body.style.backgroundColor = '#FFB6C1'; // Light Pink
        break;
      default:
        document.body.style.backgroundColor = '#FFFFFF'; // Default to White
        break;
    }
  }, [location]);

  return location;
};

export default useStatusBar;
