import React, { Component } from "react";
import "./styles/App.scss";
import RootRouter from "./RootRouter";
import Login from "./components/login";
import Signup from "./components/signup";
import HomePage from "./components/homepage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <RootRouter>
            <Switch>
              <Route path="/homepage" component={HomePage} />
              <Route path="/signup" component={Signup} />
              <Route path="/" component={Login} />
            </Switch>
            <ToastContainer />
          </RootRouter>
        </Router>
      </Provider>
    );
  }
}

export default App;
