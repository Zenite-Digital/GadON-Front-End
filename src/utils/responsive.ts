import { useWindowDimensions } from 'react-native';

export const BP = {
  md: 768,   // tablet
  lg: 1024,  // desktop
  xl: 1280,  // desktop grande
};

export function useResponsive() {
  const { width } = useWindowDimensions();
  const isTablet = width >= BP.md && width < BP.lg;
  const isDesktop = width >= BP.lg;
  const isWide = isTablet || isDesktop;

  const maxContent = Math.min(width, 1200);
  const hPadding = width >= BP.lg ? 24 : width >= BP.md ? 20 : 12;

  return { width, isTablet, isDesktop, isWide, maxContent, hPadding };
}