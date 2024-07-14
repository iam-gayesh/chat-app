import React from 'react';
import ChatHeadList from './ChatHeadList';
import { Box, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ConversationIndex from '../../components/Conversation/ConversationIndex';

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" sx={{ width: '100%' }}>
      {/* Chat Head Component */}
      <ChatHeadList />

      {/* Chat Body Component */}
      <Box
        sx={{
          height: '100vh',
          width: 'calc(100vw - 420px)',
          backgroundColor:
            theme.palette.mode === 'light'
              ? '#FFFFFF'
              : 'theme.palette.background.default',
        }}
      >
        <ConversationIndex />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
