import React, { Component } from "react";

import { Route, Switch } from "react-router";
import { Home, Tab1, Tab2 } from "../pages";
// import { Menu } from "../components";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Switch>
          {/* <Route path="/about/:name" component={About} /> */}
          <Route path="/tab1" component={Tab1} />
          <Route path="/tab2" component={Tab2} />
        </Switch>
      </div>
    );
  }
}

export default App;
