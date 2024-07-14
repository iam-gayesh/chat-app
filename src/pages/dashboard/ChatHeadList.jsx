import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  Badge,
} from '@mui/material';
import React from 'react';
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import { ChatList } from '../../data';
import { faker } from '@faker-js/faker';
import { useTheme } from '@mui/material/styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

// for avatar in chat element
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const ChatElement = ({ id, name, image, msg, time, unread, online }) => {
  const theme = useTheme();

  return (
    <>
      <Box
        padding={1.5}
        alignContent={'center'}
        sx={{
          width: '100%',
          height: '60px',
          borderRadius: '16px',
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Stack
          direction="row"
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Stack direction="row" spacing={2}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
              >
                <Avatar src={faker.image.avatar()} />
              </StyledBadge>
            ) : (
              <Avatar src={faker.image.avatar()} />
            )}

            <Stack spacing={0.4}>
              <Typography variant="subtitle2">{name}</Typography>
              <Typography variant="caption">{msg}</Typography>
            </Stack>
          </Stack>

          <Stack
            paddingBottom={'10px'}
            spacing={2}
            alignItems={'center'}
            direction="column"
            justifyContent="flex-start"
          >
            <Typography variant="caption" sx={{ fontWeight: '600px' }}>
              {time}
            </Typography>
            <Badge badgeContent={unread} color="primary" />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

const ChatHeadList = () => {
  const theme = useTheme();

  return (
    <Box
      padding={0}
      sx={{
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        width: '320px',
        borderBottomLeftRadius: '25px', // Corrected spelling of borderBottomLeftRadius
        borderTopLeftRadius: '25px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Stack padding={3} spacing={2} sx={{ height: '100vh' }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: '16px' }}
        >
          <Typography variant="h5">Chat</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>

        {/* Seact bar */}
        <Stack sx={{ width: '100%' }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Stack>

        <Stack spacing={1.5}>
          <Stack direction="row" alignItems={'center'} spacing={1}>
            <ArchiveBox size={'24px'} />
            <Button>Archive</Button>
          </Stack>
          <Divider sx={{ borderBottomWidth: '2px' }} />
        </Stack>

        {/* Chat Element */}
        <Stack
          direction={'column'}
          sx={{
            flexGrow: 1,
            overflow: 'hidden',
            height: '100%',
            position: 'relative',
          }}
        >
          <Stack
            spacing={2}
            sx={{
              overflowY: 'scroll',
              height: '100%',
              paddingRight: '17px', // Adjust padding to avoid content being hidden
              boxSizing: 'content-box',
              scrollBehavior: 'smooth', // Add smooth scrolling behavior
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              '-ms-overflow-style': 'none',
              'scrollbar-width': 'none',
            }}
          >
            <Typography variant="subtitle2" sx={{ color: '#676767' }}>
              Pinned
            </Typography>
            {ChatList.filter((chat) => chat.pinned).map((chat) => {
              return <ChatElement key={chat.id} {...chat} />;
            })}
            <Divider sx={{ borderBottomWidth: '2px' }} />
            <Stack spacing={2.4} paddingTop={'20px'}>
              <Typography variant="subtitle2" sx={{ color: '#676767' }}>
                All Chat
              </Typography>
              {ChatList.filter((chat) => !chat.pinned).map((chat) => {
                return <ChatElement key={chat.id} {...chat} />;
              })}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChatHeadList;
