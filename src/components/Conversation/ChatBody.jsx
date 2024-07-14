import { Box, Stack } from '@mui/material';
import React from 'react';
import { Chat_History } from '../../data'; // Correct import

const ChatBody = () => {
  return (
    <Box padding={3} sx={{ flexGrow: '1', width: '100%' }}>
      <Stack spacing={3}>
        {Chat_History.map((item) => {
          switch (item.type) {
            case 'divider':
              // Handle divider
              break; // Corrected 'break'
            case 'msg':
              switch (item.subtype) {
                case 'img':
                  // Handle image message
                  break; // Corrected 'break'
                case 'doc':
                  // Handle document message
                  break; // Corrected 'break'
                case 'link':
                  // Handle link message
                  break; // Corrected 'break'
                case 'reply':
                  // Handle reply message
                  break; // Corrected 'break'
                default:
                  break; // Corrected 'break'
              }
              break;
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default ChatBody;
