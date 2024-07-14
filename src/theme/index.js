import PropTypes from 'prop-types';
import { useMemo } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
// hooks
import useSettings from '../hooks/useSettings.js';
//
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

// ----------------------------------------------------------------------

// Define prop types for the ThemeProvider component
ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  // Get themeMode and themeDirection from custom hook useSettings
  const { themeMode, themeDirection } = useSettings();

  // Determine if the theme mode is light
  const isLight = themeMode === 'light';

  // Memoize theme options to avoid unnecessary re-renders
  const themeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark, // Choose palette based on theme mode
      typography, // Typography settings
      breakpoints, // Breakpoints settings
      shape: { borderRadius: 8 }, // Border radius setting
      direction: themeDirection, // Text direction (ltr or rtl)
      shadows: isLight ? shadows.light : shadows.dark, // Shadows based on theme mode
      customShadows: isLight ? customShadows.light : customShadows.dark, // Custom shadows based on theme mode
    }),
    [isLight, themeDirection] // Dependencies for useMemo
  );

  // Create theme with the memoized theme options
  const theme = createTheme(themeOptions);

  // Override MUI component styles
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children} {/* Render child components */}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
