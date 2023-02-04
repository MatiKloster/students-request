import { Box, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import './App.css';
import ButtonAppBar from './components/appBar';
import Form from './components/form';
import SignIn from './components/singIn';

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
            <Box>
              <ButtonAppBar email = {email}/>
              <Form/>
            </Box>
          }
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
