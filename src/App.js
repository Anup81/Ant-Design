import "./App.css";
// import "antd/dist/antd.css";
import "antd/dist/antd.min.css";
import React from "react";

// import Index from "./components/Layout/Index";
import Layout from "./components/Layout";

import { Route } from "react-router-dom";

const App = ({ component: Component, rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <Layout>
          <Component {...routeProps} />
        </Layout>
      )}
    />
  );
};

export default App;
