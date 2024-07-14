import { pxToRem, responsiveFontSizes } from '../utils/getFontValue';

// ----------------------------------------------------------------------

const FONT_PRIMARY = 'Manrope, Public Sans, sans-serif'; // Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font (commented out)

const typography = {
  fontFamily: FONT_PRIMARY, // Primary font family
  fontWeightRegular: 400, // Regular font weight
  fontWeightMedium: 600, // Medium font weight
  fontWeightBold: 700, // Bold font weight
  h1: {
    fontWeight: 700, // Bold font weight
    lineHeight: 80 / 64, // Line height
    fontSize: pxToRem(40), // Font size in rem
    letterSpacing: 2, // Letter spacing
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }), // Responsive font sizes
  },
  h2: {
    fontWeight: 700, // Bold font weight
    lineHeight: 64 / 48, // Line height
    fontSize: pxToRem(32), // Font size in rem
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }), // Responsive font sizes
  },
  h3: {
    fontWeight: 700, // Bold font weight
    lineHeight: 1.5, // Line height
    fontSize: pxToRem(24), // Font size in rem
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }), // Responsive font sizes
  },
  h4: {
    fontWeight: 700, // Bold font weight
    lineHeight: 1.5, // Line height
    fontSize: pxToRem(20), // Font size in rem
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }), // Responsive font sizes
  },
  h5: {
    fontWeight: 700, // Bold font weight
    lineHeight: 1.5, // Line height
    fontSize: pxToRem(18), // Font size in rem
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }), // Responsive font sizes
  },
  h6: {
    fontWeight: 700, // Bold font weight
    lineHeight: 28 / 18, // Line height
    fontSize: pxToRem(17), // Font size in rem
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }), // Responsive font sizes
  },
  subtitle1: {
    fontWeight: 600, // Medium font weight
    lineHeight: 1.5, // Line height
    fontSize: pxToRem(16), // Font size in rem
  },
  subtitle2: {
    fontWeight: 700, // Bold font weight
    lineHeight: 22 / 14, // Line height
    fontSize: pxToRem(14), // Font size in rem
  },
  body1: {
    lineHeight: 1.5, // Line height
    fontSize: pxToRem(16), // Font size in rem
  },
  body2: {
    lineHeight: 22 / 14, // Line height
    fontSize: pxToRem(14), // Font size in rem
    fontWeight: 600, // Medium font weight
  },
  caption: {
    lineHeight: 1.5, // Line height
    fontSize: pxToRem(12), // Font size in rem
    fontWeight: 600, // Medium font weight
  },
  overline: {
    fontWeight: 700, // Bold font weight
    lineHeight: 1.5, // Line height
    fontSize: pxToRem(12), // Font size in rem
    textTransform: 'uppercase', // Uppercase text transformation
  },
  button: {
    fontWeight: 700, // Bold font weight
    lineHeight: 24 / 14, // Line height
    fontSize: pxToRem(14), // Font size in rem
    textTransform: 'capitalize', // Capitalize text transformation
  },
  article: {
    fontWeight: 700, // Bold font weight
  },
};

export default typography;
