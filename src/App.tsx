import {Container} from "Components";
import {Provider, useSelector} from "react-redux";
import {Content} from "Views/Content";
import {Header} from "Views/Header";
import reduxStore from "Stores";
import {appIsLoading} from "Stores/App";
import {CircularProgress, Grid, MuiThemeProvider} from "@material-ui/core";
import {theme} from "Theme/MaterialUITheme";
import {Footer} from "Views/Footer";
import {Sidebar} from "Views/Sidebar";
import {MyCart} from "Views/MyCart";

const App = () => {
  return (
    <Provider store={reduxStore}>
      <MuiThemeProvider theme={theme}>
        <AppContent />
      </MuiThemeProvider>
    </Provider>
  );
};

const AppContent = () => {
  const isLoading = useSelector(appIsLoading);

  if (isLoading) {
    return (
      <div className="loadingContainer">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Container>
        <Grid container spacing={3}>
          <Grid xs={12} md={3} item>
            <Sidebar />
          </Grid>
          <Grid xs={12} md={6} item>
            <Content />
          </Grid>
          <Grid xs={12} md={3} item>
            <MyCart />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
