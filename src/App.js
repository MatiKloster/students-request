import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Container } from '@mui/material';
import SignIn from './components/singIn';
import Form from './components/form';
import ButtonAppBar from  './components/appBar'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const App = () => {
  const [isLogged, setisLogged] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogging = (data) => {
    setisLogged(true)
    setEmail(data);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          {!isLogged && 
            <SignIn 
              onloggingResult = {(data) => handleLogging(data)}
            />
          }
          {isLogged && 
            <> 
              <ButtonAppBar email = {email}>
              
              </ButtonAppBar>
              <Form>

              </Form>
            </>
          }
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
