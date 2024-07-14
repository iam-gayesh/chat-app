import { Avatar, Box, Divider, IconButton, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';

import Logo from '../../assets/Images/logo.ico';
import { Nav_Buttons } from '../../data/index';
import { Gear } from 'phosphor-react';
import useSetting from '../../hooks/useSettings';

import { faker } from '@faker-js/faker';
import MaterialUISwitch from '../../components/MaterialUISwitch';

const Sidebar = () => {
  const theme = useTheme();

  const { onToggleMode } = useSetting();

  const [selected, setSelected] = useState(0);

  return (
    <Box
      padding={2}
      sx={{
        backgroundColor: theme.palette.background.default,
        boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)',
        height: '100vh',
        width: '100px',
      }}
    >
      <Stack
        direction="column"
        alignItems={'center'}
        spacing={3}
        justifyContent={'space-between'}
        sx={{ height: '100%', width: '100%' }}
      >
        <Stack alignItems={'center'} spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5, //defualt is 8px, 8px*1.5=12px
            }}
          >
            <img src={Logo} alt={'chat app logo'} />
          </Box>

          <Stack
            direction="column"
            spacing={2}
            alignItems={'center'}
            sx={{ width: 'max-content' }}
          >
            {Nav_Buttons.map((button) =>
              button.index === selected ? (
                <Box
                  padding={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    sx={{
                      width: 'max-content',
                      color:
                        theme.palette.mode === 'light'
                          ? '#ffffff'
                          : theme.palette.text.primary,
                    }}
                    key={button.index}
                  >
                    {' '}
                    {button.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => setSelected(button.index)}
                  sx={{
                    width: 'max-content',
                    color:
                      theme.palette.mode === 'light'
                        ? '#000000'
                        : theme.palette.text.primary,
                  }}
                  key={button.index}
                >
                  {' '}
                  {button.icon}
                </IconButton>
              )
            )}
            <Divider />
          </Stack>

          <Divider sx={{ width: '60px' }} />
          {selected === 3 ? (
            <Box
              padding={1}
              sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: 1.5,
              }}
            >
              <IconButton
                sx={{
                  width: 'max-content',
                  color:
                    theme.palette.mode === 'light'
                      ? '#ffffff'
                      : theme.palette.text.primary,
                }}
              >
                <Gear />
              </IconButton>
            </Box>
          ) : (
            <IconButton
              onClick={() => setSelected(3)}
              sx={{
                width: 'max-content',
                color:
                  theme.palette.mode === 'light'
                    ? '#000000'
                    : theme.palette.text.primary,
              }}
            >
              <Gear />
            </IconButton>
          )}
        </Stack>

        {/* Avatr and name */}
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <MaterialUISwitch
            onChange={() => {
              onToggleMode();
            }}
            defaultChecked
          />
          <Avatar src={faker.image.avatar()} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
