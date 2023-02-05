import { Box, Button, FormControl, InputLabel, Paper, Select } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import SelectCustom from './composed/select';

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get('email'),
    password: data.get('password'),
  });
};

// Major: http://localhost:5273/dcic/info/majors
// req type: http://localhost:5273/dcic/request/types
// plan: http://localhost:5273/dcic/info/majors/id/plans

const FormRequest = ({props}) => {
  const [major, setMajor] = useState(undefined)
  const [majorItems, setmajorItems] = useState([])


  React.useEffect(() => {
    fetch("http://localhost:5273/dcic/info/majors")
        .then(response => response.json())
        .then(data => setmajorItems(data));
  });

  return (
    <React.Fragment>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
          Enviar solicitud
        </Typography>
        <Box component="form" onSubmit={undefined} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth >
                <InputLabel id="carrera">Carrera</InputLabel>
                <Select
                  labelId="carrera"
                  id="carrera"
                  label="Carrera"
                  onChange={setMajor}
                  required
                >
                </Select>
              </FormControl>
            </Grid>
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
          </Grid>
        </Box>
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