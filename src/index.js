import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./components/Counter";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import Todo from "./components/Todo";
import TodoMain from "./components/TodoMain";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </Provider>
);

reportWebVitals();
