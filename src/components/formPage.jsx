import { Container } from '@mui/material';
import * as React from 'react';
import Copyright from './copyright';
import FormRequest from './requestForm';
import Spinner from './composed/spinner';
import SnackBarAlert from './composed/snackBar';

const FormPage = ({user}) => {
  const [requestData, setRequestData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [requested, setRequested] = React.useState(false);
  
  const onSubmitResult = (data) => {
    data.requesterEmail = user.email
    data.requesterId = user.userId
    setRequestData(data);
    setIsLoading(true);
  };

  React.useEffect(() =>{
    if(Object.keys(requestData).length !== 0){
      fetch('http://localhost:5273/gateway/v1/dcic/request', {
      method: "POST",
      body: JSON.stringify(requestData),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(json => {
      setIsLoading(false);
      setRequestData({});
      setRequested(true)
    })
    .catch(e =>console.log(e));
    }
  },[requestData]);// eslint-disable-line react-hooks/exhaustive-deps

return(
  <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
    <React.Fragment>
      {isLoading && <Spinner/>}
      {!isLoading && <FormRequest handleSubmit ={(data) => onSubmitResult(data)} />}
      {requested && <SnackBarAlert/>}
    </React.Fragment>
    <Copyright sx={{ mt: 8, mb: 4 }} />
  </Container>
);
}
export default FormPage;



