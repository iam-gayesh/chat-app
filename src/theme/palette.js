import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient(color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const PRIMARY = {
  lighter: '#CDEEFF', // Light Sky Blue
  light: '#6FC0FF', // Sky Blue
  main: '#0096FF', // Dodger Blue
  dark: '#006BB3', // Cobalt Blue
  darker: '#004080', // Dark Cobalt Blue
};
const SECONDARY = {
  lighter: '#FFF0E1', // Light Peach
  light: '#FFC1A3', // Peach
  main: '#FF8040', // Dark Peach
  dark: '#CC6600', // Brown Orange
  darker: '#994C00', // Dark Brown Orange
};
const INFO = {
  lighter: '#D7F3FF', // Light Baby Blue
  light: '#80D4FF', // Baby Blue
  main: '#00B0FF', // Vivid Sky Blue
  dark: '#007BBB', // Deep Sky Blue
  darker: '#004D80', // Dark Deep Sky Blue
};
const SUCCESS = {
  lighter: '#DFFFE3', // Light Mint Green
  light: '#98FF9F', // Mint Green
  main: '#32CD32', // Lime Green
  dark: '#229A16', // Dark Lime Green
  darker: '#08660D', // Dark Green
};
const WARNING = {
  lighter: '#FFF9E1', // Light Yellow
  light: '#FFE97F', // Medium Yellow
  main: '#FFC107', // Amber
  dark: '#B78103', // Dark Amber
  darker: '#7A4F01', // Dark Brown Amber
};
const ERROR = {
  lighter: '#FFE9EB', // Light Pink
  light: '#FF9093', // Salmon Pink
  main: '#FF4C4C', // Red Orange
  dark: '#CC3C3C', // Dark Red Orange
  darker: '#992C2C', // Dark Red Brown
};

const GREY = {
  0: '#FFFFFF', // White
  100: '#F9FAFB', // Light Grey
  200: '#F4F6F8', // Lighter Grey
  300: '#DFE3E8', // Light Grey
  400: '#C4CDD5', // Grey
  500: '#919EAB', // Medium Grey
  600: '#637381', // Dark Grey
  700: '#454F5B', // Darker Grey
  800: '#212B36', // Very Dark Grey
  900: '#161C24', // Almost Black
  500_8: alpha('#919EAB', 0.08), // Light Transparent Grey
  500_12: alpha('#919EAB', 0.12), // Light Transparent Grey
  500_16: alpha('#919EAB', 0.16), // Medium Transparent Grey
  500_24: alpha('#919EAB', 0.24), // Medium Transparent Grey
  500_32: alpha('#919EAB', 0.32), // Dark Transparent Grey
  500_48: alpha('#919EAB', 0.48), // Darker Transparent Grey
  500_56: alpha('#919EAB', 0.56), // Very Dark Transparent Grey
  500_80: alpha('#919EAB', 0.8), // Almost Opaque Transparent Grey
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main), // Gradient from Sky Blue to Dodger Blue
  info: createGradient(INFO.light, INFO.main), // Gradient from Baby Blue to Vivid Sky Blue
  success: createGradient(SUCCESS.light, SUCCESS.main), // Gradient from Mint Green to Lime Green
  warning: createGradient(WARNING.light, WARNING.main), // Gradient from Medium Yellow to Amber
  error: createGradient(ERROR.light, ERROR.main), // Gradient from Salmon Pink to Red Orange
};

const CHART_COLORS = {
  violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'], // Various shades of Violet
  blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'], // Various shades of Blue
  green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'], // Various shades of Green
  yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'], // Various shades of Yellow
  red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'], // Various shades of Red
};

const COMMON = {
  common: { black: '#000', white: '#fff' }, // Black and White
  primary: { ...PRIMARY, contrastText: '#fff' }, // Primary colors with White text
  secondary: { ...SECONDARY, contrastText: '#fff' }, // Secondary colors with White text
  info: { ...INFO, contrastText: '#fff' }, // Info colors with White text
  success: { ...SUCCESS, contrastText: GREY[800] }, // Success colors with Very Dark Grey text
  warning: { ...WARNING, contrastText: GREY[800] }, // Warning colors with Very Dark Grey text
  error: { ...ERROR, contrastText: '#fff' }, // Error colors with White text
  grey: GREY, // Grey colors
  gradients: GRADIENTS, // Gradient colors
  chart: CHART_COLORS, // Chart colors
  divider: GREY[500_24], // Divider color: Medium Transparent Grey
  action: {
    hover: GREY[500_8], // Hover action color: Light Transparent Grey
    selected: GREY[500_16], // Selected action color: Medium Transparent Grey
    disabled: GREY[500_80], // Disabled action color: Almost Opaque Transparent Grey
    disabledBackground: GREY[500_24], // Disabled background color: Medium Transparent Grey
    focus: GREY[500_24], // Focus action color: Medium Transparent Grey
    hoverOpacity: 0.08, // Hover opacity
    disabledOpacity: 0.48, // Disabled opacity
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: 'light', // Light mode
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] }, // Text colors for light mode
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] }, // Background colors for light mode
    action: { active: GREY[600], ...COMMON.action }, // Action colors for light mode
  },
  dark: {
    ...COMMON,
    mode: 'dark', // Dark mode
    text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] }, // Text colors for dark mode
    background: { paper: GREY[800], default: GREY[900], neutral: GREY[500_16] }, // Background colors for dark mode
    action: { active: GREY[500], ...COMMON.action }, // Action colors for dark mode
  },
};

export default palette;
