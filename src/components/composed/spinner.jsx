import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Grid } from '@mui/material';

export default function Spinner() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '10rem' }}
    >
      <Grid item xs={3}>
        <CircularProgress />
      </Grid>
    </Grid> 
  );
}