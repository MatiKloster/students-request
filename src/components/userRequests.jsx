import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from 'react';
import { useState } from 'react';

// Major: http://localhost:5273/dcic/info/majors
// req type: http://localhost:5273/dcic/request/types
// plan: http://localhost:5273/dcic/info/majors/id/plans

const dummyUser = [{email: "lucianobaschiera@gmail.com", userId: '7581b80c-9635-4fa6-b52a-b857ad276156'}, {email: 'matikloster2@gmail.com', userId: '7581b80c-9635-4fa6-b52a-b857ad276151'}];

const UserRequests = ({email}) => {
  const [requests, setRequests] = useState([]);
  const userId = dummyUser.find(x => x.email===email).userId;

  React.useEffect(() => {
    fetch(`http://localhost:5273/gateway/v1/dcic/request/student/${userId}`)
    .then(response => response.json())
    .then(requests => {
      setRequests(requests);
    });
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h5" align="center">
          Solicitudes enviadas
        </Typography>
        <Box component="form" noValidate sx={{ mt: 4 }}>
          <Grid container spacing={3}>
          {requests.map((request) => (
            <Grid item xs={12}>
              <Accordion key={request.id}>
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
                    {request.body}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
          </Grid>
        </Box>
      </Paper>
    </React.Fragment>
  );
};

export default UserRequests;