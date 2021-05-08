import {Container} from "Components";
import {Content} from "Views/Content";
import {Header} from "Views/Header";

const App = () => {
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
