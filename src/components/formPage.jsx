import { Container } from '@mui/material';
import * as React from 'react';
import Copyright from './copyright';
import FormRequest from './requestForm';
import FormRequestNoGrid from './requestFormNoGrid';

const FormPage = ({email}) => {
  const [requestData, setRequestData] = React.useState({});
  
  const onSubmitResult = (data) => {
    console.log(data);
    data.requesterEmail = email
    setRequestData(data);
  };

  React.useEffect(() =>{
    console.log(requestData);
    if(Object.keys(requestData).length !== 0){
      fetch('http://localhost:5273/gateway/v1/dcic/request', {
      method: "POST",
      body: JSON.stringify(requestData),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => {
      
    })
    .catch(e =>console.log(e));
    }
  },[requestData]);// eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    console.log(email);
  }, []);

  
return(
  <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
    <React.Fragment>
      <FormRequest handleSubmit ={(data) => onSubmitResult(data)} email={email}/>
    </React.Fragment>
    <Copyright sx={{ mt: 8, mb: 4 }} />
  </Container>
);
}
export default FormPage;



