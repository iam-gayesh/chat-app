import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

//for message input field
const StyledInputField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    padding: '4px 0px', // padding: top/bottom 4px, left/right 0px
    borderRadius: '25px',
    backgroundColor:
      theme.palette.mode === 'light'
        ? '#FFFFFF'
        : 'theme.palette.background.default',
    boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
  },
  '& .MuiFilledInput-root': {
    padding: '4px 0px', // Adjust padding inside the filled input
    borderRadius: '20px',
  },
  '& .MuiInputBase-input': {
    padding: '4px 12px', // Remove default padding from the input
    borderRadius: '25px',
  },
}));

export default StyledInputField;
