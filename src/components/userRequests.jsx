import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Container, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from 'react';
import { useState } from 'react';

const UserRequests = ({user}) => {
  const [requests, setRequests] = useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:5273/gateway/v1/dcic/request/student/${user.userId}`)
    .then(response => response.json())
    .then(requests => {
      setRequests(requests);
    });
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 4 }, p: { xs: 2, md: 3 } }}>
      <React.Fragment>
        <Typography component="h1" variant="h5" align="center">
          Solicitudes enviadas
        </Typography>
        <Box component="form" noValidate sx={{ mt: 4 }}>
          <Grid container spacing={3}>
          { requests.length ? requests.map((request) => (
            <Grid item xs={12} key={request.id}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={{ width: '90%', flexShrink: 0 }}>{request.type}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>Estado: {request.status}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {"Solicitada el dia: " + new Date(request.startDate).toLocaleDateString()}
                  </Typography>
                  <Typography>
                    {"Descripción: " + request.body}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))
          : 
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ color: 'text.secondary' }} align="center">Aún no has creado ninguna solicitud</Typography>
            </Grid>
          }
          </Grid>
        </Box>
      </React.Fragment>
    </Paper>
  );
};

export default UserRequests;