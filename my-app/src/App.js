import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Results from "./components/Results";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search/:state" component={Results} />
      </Switch>
    </div>
  );
}

export default App;
