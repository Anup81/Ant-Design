import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  DesktopOutlined,
  UserOutlined,
  MailOutlined,
  TeamOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

import Counter from "../Counter";
import { Link } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Home", "1", <HomeOutlined />),
  getItem("Counter", "2", <DesktopOutlined />),
  getItem("Users", "3", <UserOutlined />),
  getItem("To Do", "4", <MailOutlined />),
  // getItem("User", "sub1", <UserOutlined />, [
  //   getItem("Tom", "3"),
  //   getItem("Bill", "4"),
  //   getItem("Alex", "5"),
  // ]),
  // getItem("Team", "sub2", <TeamOutlined />, [
  //   getItem("Team 1", "6"),
  //   getItem("Team 2", "8"),
  // ]),
  // getItem("Files", "9", <FileOutlined />),
];

const App = () => {
  const [collapsed, setCollapse] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapse(collapsed);
  };
  return (
    <div>
      {" "}
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            // items={items}
          >
            <Menu.Item key="/">
              <HomeOutlined />
              <span>Home</span>
              <Link to="/"></Link>
            </Menu.Item>

            <Menu.Item key="/users">
              <TeamOutlined />
              <span>Users</span>
              <Link to="/users"></Link>
            </Menu.Item>

            <Menu.Item key="/counter">
              <DashboardOutlined />
              <span>Counter</span>
              <Link to="/counter"></Link>
            </Menu.Item>

            <Menu.Item key="/todo">
              <MailOutlined />
              <span>Todo</span>
              <Link to="/todo"></Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              marginBottom: 15,
            }}
          />
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Counter />
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Anup Design ©2022
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
