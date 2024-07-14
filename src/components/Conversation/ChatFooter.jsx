import { Box, IconButton, InputAdornment, Stack } from '@mui/material';
import React from 'react';
import { LinkSimple, PaperPlaneTilt, Smiley } from 'phosphor-react';
import StyledInputField from '../StyledInputField';
import { useTheme } from '@mui/material/styles';

const ChatFooter = () => {
  const theme = useTheme();

  return (
    <Box
      paddingTop={1}
      paddingBottom={1.5}
      paddingX={2}
      sx={{
        width: '100%',
        borderBottomRightRadius: '25px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Stack direction="row" spacing={2} alignItems={'center'}>
        <StyledInputField
          fullWidth
          placeholder="Message ..."
          variant={'filled'}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment>
                <IconButton>
                  <LinkSimple />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment>
                <IconButton>
                  <Smiley />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box
          sx={{
            width: '48px',
            height: '48px',
            backgroundColor: theme.palette.primary.main,
            borderRadius: '16px',
          }}
        >
          <Stack
            sx={{ height: '100%', width: '100%' }}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <IconButton>
              <PaperPlaneTilt color="#FFFFFF" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default ChatFooter;
