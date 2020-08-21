import React from "react";
import { Layout, Menu } from "antd";
const { Content } = Layout;
import SiderComponent from "../src/components/sider/sider";
import HeaderComponent from "../src/components/header/header";
import FooterComponent from "../src/components/footer/footer";
 import HomeStyleWrapper from "./home.style";
const home = () => {
  return (
    <HomeStyleWrapper>
      <title>Homepage</title>
      <Layout>
        <SiderComponent />
        <Layout>
          <HeaderComponent />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: "100vh" }}
            ></div>
          </Content>
          <FooterComponent />
        </Layout>
      </Layout>
    </HomeStyleWrapper>
  );
};
export default home;
