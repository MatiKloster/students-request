import { Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import ButtonAppBar from "./components/appBar";
import FormPage from "./components/formPage";
import UserRequests from "./components/userRequests";
import SignIn from "./components/singIn";
const theme = createTheme();

const App = () => {
  const [isLogged, setisLogged] = useState(false);
  const [user, setUser] = useState({});
  const [pageForm, setPageStatus] = useState(false)

  const handleLogging = (data) => {
    setisLogged(true);
    setUser(data);
  };

  const handlePageChange = (data) => {
    setPageStatus(data);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div >
          {!isLogged && (
            <Grid item xs={12} md={12} lg={12}>
              <SignIn onloggingResult={(data) => handleLogging(data)} />
            </Grid>
          )}
            {isLogged && (
            <div>
              <ButtonAppBar user={user} handlePageChange={(data) => handlePageChange(data)}/>
              {pageForm && (
                <FormPage user={user} />
              )}
              {!pageForm && 
                <UserRequests user={user} />
              }
            </div>
          )}
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;