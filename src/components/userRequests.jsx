import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from 'react';
import { useState } from 'react';

// Major: http://localhost:5273/dcic/info/majors
// req type: http://localhost:5273/dcic/request/types
// plan: http://localhost:5273/dcic/info/majors/id/plans

const dummyUser = [{'lucianobaschiera@gmail.com': ['7581b80c-9635-4fa6-b52a-b857ad276156']}];

const UserRequests = ({email}) => {
  const [requests, setRequests] = useState([]);
  const userId = dummyUser[email];

  React.useEffect(() => {
    fetch(`http://localhost:5273/gateway/v1/dcic/request/${userId}`)
    .then(response => response.json())
    .then(requests => {
      setRequests(requests);
    });
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>
      {requests.map((request) => (
      <Accordion key={request.id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{request.type}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {request.body}
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}
    </React.Fragment>
  );
};

export default UserRequests;