import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Results from "./components/Results";
import footerImage from "./images/footerImg.png";
import { Image } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search/:state" component={Results} />
      </Switch>
      <Image className="footer" src={footerImage} objectFit="cover" />
    </div>
  );
}

export default App;
