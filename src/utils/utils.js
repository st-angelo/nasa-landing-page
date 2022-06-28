import { useWindowWidth } from '@react-hook/window-size';
import { useMemo } from 'react';

export const screenSizes = {
  sm: 640,
  md: 768,
  lg: 1200,
  xl: 1560,
};

export const useScreenSize = () => {
  const width = useWindowWidth();

  const screenSize = useMemo(() => {
    if (width >= screenSizes.xl) return 'xl';
    if (width >= screenSizes.lg) return 'lg';
    if (width >= screenSizes.md) return 'md';
    return 'sm';
  }, [width]);

  return screenSize;
};
