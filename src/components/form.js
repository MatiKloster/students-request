import { Box, TextField } from '@mui/material';
import * as React from 'react';


const Form = ({props}) => {


return(
    <Box sx={{ flexGrow: 1 }}>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
    </Box>
);
}
export default Form;