import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';

// Major: http://localhost:5273/dcic/info/majors
// req type: http://localhost:5273/dcic/request/types
// plan: http://localhost:5273/dcic/info/majors/id/plans

const FormRequest = ({handleSubmit, email}) => {
  const [majorItems, setmajorItems] = useState([]);
  const [typesItems, setTypesItems] = useState([]);
  const [majorId, setMajorId] = useState("");
  const [typeId, setTypeId] = useState("");
  const [planItems, setPlanItems] = useState([]);
  const [plan, setPlan] = useState("")

  const [body, setBody]=useState("");
  const [dni, setDni]=useState("");
  const [lu, setLu]=useState("");
  const []=useState();

  React.useEffect(() => {
    fetch("http://localhost:5273/gateway/v1/dcic/info/majors")
        .then(response => response.json())
        .then(data => {
          setmajorItems(data);
        });
  },[]);// eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    fetch("http://localhost:5273/gateway/v1/dcic/request/types")
        .then(response => response.json())
        .then(data => {
          setTypesItems(data);
        });
  },[]);// eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    majorId !==""  && fetch(`http://localhost:5273/gateway/v1/dcic/info/majors/${majorId}/plans`)
        .then(response => response.json())
        .then(data => {
          setPlanItems(data);
        });
  },[majorId]);// eslint-disable-line react-hooks/exhaustive-deps

/*   const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dto = {
      requesterEmail: props.email,
      typeid: data.get('type'),
      major: data.get('major'),
      plan: data.get('plan'),
      dni: data.get('DNI'),
      lu: data.get('lu'),
      body: data.get('body'),
    }
    console.log(dto);

    props.callback(dto);
  }; */

  const handlewe = (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    let _datos = {
      typeid: typeId,
      major: majorId,
      plan: plan,
      dni: dni,
      lu: lu,
      body: body,
    }
    console.log(JSON.stringify(_datos));
    handleSubmit(_datos);
  }

  return (
    <React.Fragment>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h5" align="center">
          Enviar solicitud
        </Typography>
        <Box component="form" onSubmit={handlewe} noValidate sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl variant="outlined"  fullWidth >
                <InputLabel id="type">Tipo</InputLabel>
                <Select
                  labelId="type"
                  id="typeid"
                  label="Tipo"
                  value={typeId}
                  onChange={e => setTypeId(e.target.value)}
                  required
                >
                  {typesItems.map((item) =>
                    <MenuItem value={item.id} key={item.id}> {item.name}</MenuItem>)}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth >
                <InputLabel id="major">Carrera</InputLabel>
                <Select
                  labelId="major"
                  id="major"
                  label="Carrera"
                  value={majorId}
                  onChange={e => setMajorId(e.target.value)}
                  required
                >
                  {majorItems.map((item) =>
                    <MenuItem value={item.id} key={item.id}> {item.name}</MenuItem>)}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth disabled={majorId === ""}>
                <InputLabel id="plan">Plan</InputLabel>
                <Select
                  labelId="plan"
                  id="plan"
                  label="Plan"
                  value={plan}
                  onChange={e =>{ console.log(e); setPlan(e.target.value)}}
                  required
                >
                  {planItems.map((item) =>
                    <MenuItem value={item.id} key={item.id}> {item.revisionYear}</MenuItem>)}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="name"
                name="Nombre"
                label="Nombre y apellido"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="DNI"
                name="DNI"
                label="DNI"
                fullWidth
                variant="standard"
                onChange={e => setDni(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="LU"
                name="LU"
                label="LU"
                fullWidth
                variant="standard"
                onChange={e => setLu(e.target.value)}
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
              <TextField
                required
                id="body"
                name="descripcion"
                label="Descripcion"
                fullWidth
                multiline
                rows={6}
                variant="standard"
                helperText="Describa su caso particular."
                onChange={e => setBody(e.target.value)}
              />
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              type="submit"
              sx={{ mt: 3, ml: 1 }}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      </Paper>
    </React.Fragment>
  );
}

export default FormRequest;