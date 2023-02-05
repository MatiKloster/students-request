import { Box, Button, Container, CssBaseline, FormControl, FormControlLabel, InputLabel, Select } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Copyright from './copyright';

/* const SignIn = ({onloggingResult}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    onloggingResult(data.get('email'));
  }; */

const FormRequestNoGrid = ({props}) => {
  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Ingresa
          </Typography>
          <Box component="form" onSubmit={undefined} noValidate sx={{ mt: 1 }}>
            <TextField
              required
              id="firstName"
              name="Nombre"
              label="Nombre y apellido"
              fullWidth
              variant="standard"
            />
            <TextField
              required
              id="dni"
              name="DNI"
              label="DNI"
              fullWidth
              variant="standard"
            />
            <TextField
              required
              id="lu"
              name="LU"
              label="LU"
              fullWidth
              variant="standard"
            />
            <TextField
              required
              id="cel"
              name="telefono"
              label="Telefono"
              fullWidth
              variant="standard"
            />
            <FormControl fullWidth
              sx = {{pt: 3}}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                onChange={undefined}
              >
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Pasá
            </Button>
          </Box>
        </Box>
      </Container>
  );
}

export default FormRequestNoGrid;