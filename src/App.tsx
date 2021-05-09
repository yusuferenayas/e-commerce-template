import {Container} from "Components";
import {Provider, useSelector} from "react-redux";
import {Content} from "Views/Content";
import {Header} from "Views/Header";
import reduxStore from "Stores";
import {appIsLoading} from "Stores/App";
import {CircularProgress, MuiThemeProvider} from "@material-ui/core";
import {theme} from "Theme/MaterialUITheme";

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
        <div style={{width: "25%"}}></div>
        <Content />
        <div style={{width: "25%"}}></div>
      </Container>
    </div>
  );
};

export default App;
