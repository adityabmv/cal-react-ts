import React, { Component } from "react";
import { observer } from "mobx-react";
import { authStore, AuthContext } from "@/features/authentication/Auth";
import './App.css'
import Page from "./pages/Dashboard";

@observer
class App extends Component {
  static contextType = AuthContext;
  declare context: typeof authStore;
  render() {
    const { isAuthenticated, user, logout } = this.context;

    return (
      <div>
        {isAuthenticated ? (
          <div>Welcome, you are logged in!</div>
        ) : (
          <Page/>
        )}
      </div>
    );
  }
}
App.contextType = AuthContext;


class AppWrapper extends Component {
  render() {
    return (
      <AuthContext.Provider value={authStore}>
        <App />
      </AuthContext.Provider>
    );
  }
}

export default AppWrapper;
