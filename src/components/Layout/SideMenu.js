import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  DesktopOutlined,
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Header } from "antd/lib/layout/layout";

const { Sider } = Layout;

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

const SideMenu = () => {
  const [collapsed, setCollapse] = useState(false);
  const location = useLocation();
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
            defaultSelectedKeys={[location.pathname]}
            mode="inline"
            //   items={items}
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
        </Layout>
      </Layout>
    </div>
  );
};

export default SideMenu;
