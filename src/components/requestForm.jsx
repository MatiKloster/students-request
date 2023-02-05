import { Box, Button, FormControl, InputLabel, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import SelectCustom from './composed/select';
import Select from './composed/select';



const FormRequest = ({props}) => {
  return (
    <React.Fragment>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
      <Typography component="h1" variant="h4" align="center">
        Enviar solicitud
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="firstName"
            name="Nombre"
            label="Nombre y apellido"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="dni"
            name="DNI"
            label="DNI"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lu"
            name="LU"
            label="LU"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="cel"
            name="telefono"
            label="Telefono"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <SelectCustom
            label="Tipo"
            labelId="tipo"
            id="tipo"
            required
            needsLabel
            callback={undefined}
          />
        </Grid>
        <Grid item xs={12}>
          <SelectCustom
            label="Carrera"
            labelId="carrera"
            id="carrera"
            required
            needsLabel
            callback={undefined}
          />
        </Grid>
        <Grid item xs={12}>
          <SelectCustom
            label="Plan"
            labelId="tipo"
            id="tipo"
            required
            needsLabel
            callback={undefined}
          />
        </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            onClick={undefined}
            sx={{ mt: 3, ml: 1 }}
          >
            Enviar
          </Button>
        </Box>
      </Paper>
    </React.Fragment>
  );
}

export default FormRequest;