import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { faker } from '@faker-js/faker';
import {
  CaretDown,
  MagnifyingGlass,
  PhoneCall,
  VideoCamera,
} from 'phosphor-react';
import StyledBadge from '../StyledBadge';

const ChatHeader = () => {
  const theme = useTheme();

  return (
    <Box
      padding={2}
      sx={{
        width: '100%',
        borderTopRightRadius: '25px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Stack
        direction="row"
        alignItems={'center'}
        justifyContent={'space-between'}
        sx={{ width: '100%', height: '100%' }}
      >
        <Stack direction="row" spacing={2}>
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          </Box>
          <Stack spacing={0.1}>
            <Typography variant="subtitle2">
              {faker.name.firstName()}
            </Typography>
            <Typography variant="caption">Online</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={4}>
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <PhoneCall />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChatHeader;
