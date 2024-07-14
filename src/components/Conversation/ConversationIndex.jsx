import { Stack } from '@mui/material';
import React from 'react';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import ChatBody from './ChatBody';

const ConversationIndex = () => {
  return (
    <Stack sx={{ height: '100%', maxHeight: '100vh', width: 'auto' }}>
      {/* Chat Header */}
      <ChatHeader />

      {/* Chat Body */}
      <ChatBody />

      {/* Chat Footer */}
      <ChatFooter />
    </Stack>
  );
};

export default ConversationIndex;
