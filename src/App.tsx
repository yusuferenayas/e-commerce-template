import {Container} from "Components";
import {Provider, useSelector} from "react-redux";
import {Content} from "Views/Content";
import {Header} from "Views/Header";
import reduxStore from "Stores";
import {appIsLoading} from "Stores/App";
import ReactLoading from "react-loading";
import {colors} from "Theme/Variables";

const App = () => {
  return (
    <Provider store={reduxStore}>
      <AppContent />
    </Provider>
  );
};

const AppContent = () => {
  const isLoading = useSelector(appIsLoading);

  if (isLoading) {
    return (
      <div className="loadingContainer">
        <ReactLoading type={"spinningBubbles"} color={colors.primary} />
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
