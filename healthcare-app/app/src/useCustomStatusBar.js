import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

const useCustomStatusBar = () => {
  const [statusBarColor, setStatusBarColor] = useState(null);

  useEffect(() => {
    if (statusBarColor) {
      StatusBar.setBackgroundColor(statusBarColor, true);
    } else {
      StatusBar.setBackgroundColor('#FFFFFF', true); // Default color
    }
  }, [statusBarColor]);

  return [statusBarColor, setStatusBarColor];
};

export default useCustomStatusBar;
