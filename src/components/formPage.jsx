import { Container } from '@mui/material';
import * as React from 'react';
import Copyright from './copyright';
import FormRequest from './requestForm';
import FormRequestNoGrid from './requestFormNoGrid';

const FormPage = ({props}) => {
return(
  <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
    <React.Fragment>
      <FormRequest props={undefined}/>
    </React.Fragment>
    <Copyright sx={{ mt: 8, mb: 4 }} />
  </Container>
);
}
export default FormPage;



