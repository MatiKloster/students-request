import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, styled } from "@mui/material";
import * as React from 'react';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function ButtonAppBar({email}) {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Bienvenido {email}
          </Typography>
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  );
}