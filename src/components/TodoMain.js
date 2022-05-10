import React from "react";
import SideMenu from "./Layout/SideMenu";
import Footer from "./Layout/Footer";
import { Layout } from "antd";
import Todo from "./Todo";
const { Content } = Layout;

const TodoMain = () => {
  return (
    <div>
      <SideMenu />
    </div>
  );
};

export default TodoMain;
