import {Container} from "Components";
import {Content} from "Views/Content";
import {Header} from "Views/Header";
import "./App.scss";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Content />
      </Container>
    </div>
  );
}

export default App;
