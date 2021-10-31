import React, { Component } from "react";

import { Route, Switch } from "react-router";
import { Home, Tap1, Tap2 } from "../pages";
// import { Menu } from "../components";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Switch>
          {/* <Route path="/about/:name" component={About} /> */}
          <Route path="/tap1" component={Tap1} />
          <Route path="/tap2" component={Tap2} />
        </Switch>
      </div>
    );
  }
}

export default App;
