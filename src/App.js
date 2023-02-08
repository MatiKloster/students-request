import { Grid, styled } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import "./App.css";
import ButtonAppBar from "./components/appBar";
import FormPage from "./components/formPage";
import UserRequests from "./components/userRequests";
import SignIn from "./components/singIn";

const theme = createTheme();

const App = () => {
  const [isLogged, setisLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [pageForm, setPageStatus] = useState(false)

  const handleLogging = (data) => {
    setisLogged(true);
    setEmail(data);
  };

  const handlePageChange = (data) => {
    setPageStatus(data);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          {!isLogged && (
            <Grid item xs={12} md={12} lg={12}>
              <SignIn onloggingResult={(data) => handleLogging(data)} />
            </Grid>
          )}
          {isLogged && (
            <>
              <ButtonAppBar email={email} handlePageChange={(data) => handlePageChange(data)}/>
              {pageForm && (
                <FormPage email={email} />
              )}
              {!pageForm && 
                <UserRequests email={email} />
              }
            </>
          )}
        </Container>
      </ThemeProvider>
    </>
  );
};

const Container = styled(Grid)({
  minHeight: "50rem",
});

export default App;