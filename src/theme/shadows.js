// @mui
import { alpha } from '@mui/material/styles';
//
import palette from './palette';

// ----------------------------------------------------------------------

const LIGHT_MODE = palette.light.grey[500]; // Medium Grey
const DARK_MODE = '#000000'; // Black

const createShadow = (color) => {
  const transparent1 = alpha(color, 0.2); // 20% opacity
  const transparent2 = alpha(color, 0.14); // 14% opacity
  const transparent3 = alpha(color, 0.12); // 12% opacity
  return [
    'none', // No shadow
    `0px 2px 1px -1px ${transparent1},0px 1px 1px 0px ${transparent2},0px 1px 3px 0px ${transparent3}`, // Light shadow
    `0px 3px 1px -2px ${transparent1},0px 2px 2px 0px ${transparent2},0px 1px 5px 0px ${transparent3}`, // Slightly darker shadow
    `0px 3px 3px -2px ${transparent1},0px 3px 4px 0px ${transparent2},0px 1px 8px 0px ${transparent3}`, // Darker shadow
    `0px 2px 4px -1px ${transparent1},0px 4px 5px 0px ${transparent2},0px 1px 10px 0px ${transparent3}`, // Even darker shadow
    `0px 3px 5px -1px ${transparent1},0px 5px 8px 0px ${transparent2},0px 1px 14px 0px ${transparent3}`, // More shadow
    `0px 3px 5px -1px ${transparent1},0px 6px 10px 0px ${transparent2},0px 1px 18px 0px ${transparent3}`, // Deeper shadow
    `0px 4px 5px -2px ${transparent1},0px 7px 10px 1px ${transparent2},0px 2px 16px 1px ${transparent3}`, // Deeper and wider shadow
    `0px 5px 5px -3px ${transparent1},0px 8px 10px 1px ${transparent2},0px 3px 14px 2px ${transparent3}`, // Even deeper shadow
    `0px 5px 6px -3px ${transparent1},0px 9px 12px 1px ${transparent2},0px 3px 16px 2px ${transparent3}`, // Deeper and even wider shadow
    `0px 6px 6px -3px ${transparent1},0px 10px 14px 1px ${transparent2},0px 4px 18px 3px ${transparent3}`, // Deeper and larger shadow
    `0px 6px 7px -4px ${transparent1},0px 11px 15px 1px ${transparent2},0px 4px 20px 3px ${transparent3}`, // Very deep shadow
    `0px 7px 8px -4px ${transparent1},0px 12px 17px 2px ${transparent2},0px 5px 22px 4px ${transparent3}`, // Deeper and much larger shadow
    `0px 7px 8px -4px ${transparent1},0px 13px 19px 2px ${transparent2},0px 5px 24px 4px ${transparent3}`, // Large and deep shadow
    `0px 7px 9px -4px ${transparent1},0px 14px 21px 2px ${transparent2},0px 5px 26px 4px ${transparent3}`, // Very large and deep shadow
    `0px 8px 9px -5px ${transparent1},0px 15px 22px 2px ${transparent2},0px 6px 28px 5px ${transparent3}`, // Extremely large and deep shadow
    `0px 8px 10px -5px ${transparent1},0px 16px 24px 2px ${transparent2},0px 6px 30px 5px ${transparent3}`, // Ultra large and deep shadow
    `0px 8px 11px -5px ${transparent1},0px 17px 26px 2px ${transparent2},0px 6px 32px 5px ${transparent3}`, // Massive and deep shadow
    `0px 9px 11px -5px ${transparent1},0px 18px 28px 2px ${transparent2},0px 7px 34px 6px ${transparent3}`, // Super massive and deep shadow
    `0px 9px 12px -6px ${transparent1},0px 19px 29px 2px ${transparent2},0px 7px 36px 6px ${transparent3}`, // Enormous and deep shadow
    `0px 10px 13px -6px ${transparent1},0px 20px 31px 3px ${transparent2},0px 8px 38px 7px ${transparent3}`, // Giant and deep shadow
    `0px 10px 13px -6px ${transparent1},0px 21px 33px 3px ${transparent2},0px 8px 40px 7px ${transparent3}`, // Immense and deep shadow
    `0px 10px 14px -6px ${transparent1},0px 22px 35px 3px ${transparent2},0px 8px 42px 7px ${transparent3}`, // Colossal and deep shadow
    `0px 11px 14px -7px ${transparent1},0px 23px 36px 3px ${transparent2},0px 9px 44px 8px ${transparent3}`, // Monumental and deep shadow
    `0px 11px 15px -7px ${transparent1},0px 24px 38px 3px ${transparent2},0px 9px 46px 8px ${transparent3}`, // Titanic and deep shadow
  ];
};

const createCustomShadow = (color) => {
  const transparent = alpha(color, 0.16); // 16% opacity
  return {
    z1: `0 1px 2px 0 ${transparent}`, // Very light shadow
    z8: `0 8px 16px 0 ${transparent}`, // Light shadow
    z12: `0 12px 24px -4px ${transparent}`, // Medium shadow
    z16: `0 16px 32px -4px ${transparent}`, // Medium-dark shadow
    z20: `0 20px 40px -4px ${transparent}`, // Dark shadow
    z24: `0 24px 48px 0 ${transparent}`, // Very dark shadow
    //
    primary: `0 8px 16px 0 ${alpha(palette.light.primary.main, 0.24)}`, // Primary shadow
    info: `0 8px 16px 0 ${alpha(palette.light.info.main, 0.24)}`, // Info shadow
    secondary: `0 8px 16px 0 ${alpha(palette.light.secondary.main, 0.24)}`, // Secondary shadow
    success: `0 8px 16px 0 ${alpha(palette.light.success.main, 0.24)}`, // Success shadow
    warning: `0 8px 16px 0 ${alpha(palette.light.warning.main, 0.24)}`, // Warning shadow
    error: `0 8px 16px 0 ${alpha(palette.light.error.main, 0.24)}`, // Error shadow
    //
    card: `0 0 2px 0 ${alpha(color, 0.2)}, 0 12px 24px -4px ${alpha(color, 0.12)}`, // Card shadow
    dialog: `-40px 40px 80px -8px ${alpha(palette.light.common.black, 0.24)}`, // Dialog shadow
    dropdown: `0 0 2px 0 ${alpha(color, 0.24)}, -20px 20px 40px -4px ${alpha(color, 0.24)}`, // Dropdown shadow
  };
};

export const customShadows = {
  light: createCustomShadow(LIGHT_MODE), // Custom shadows for light mode
  dark: createCustomShadow(DARK_MODE), // Custom shadows for dark mode
};

const shadows = {
  light: createShadow(LIGHT_MODE), // Shadows for light mode
  dark: createShadow(DARK_MODE), // Shadows for dark mode
};

export default shadows;
