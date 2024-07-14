import { Box, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';

const DashboardLayout = () => {
  const theme = useTheme();

  return (
    <Stack direction="row">
      <Box
        padding={0}
        sx={{
          display: 'flex',
          height: '100vh',
          backgroundColor:
            theme.palette.mode === 'light'
              ? '#F8FAFF'
              : 'theme.palette.background.default',
        }}
      >
        <Sidebar />

        <Outlet />
      </Box>
    </Stack>
  );
};

export default DashboardLayout;
