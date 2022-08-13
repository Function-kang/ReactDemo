import React from 'react';
import { useNavigate } from "react-router-dom"
import { Layout, Menu } from 'antd';
import { Router } from "../router";
import { menuItems } from "./columns";
import './index.scss';

const { Header, Footer, Sider, Content } = Layout;

const App: React.FC = () => {
  const navigate = useNavigate()
  const menuClick = ({ key }: any) => {
    navigate(key);
  }
  return (
    <div className="app">
      <Layout style={{height: "100%"}}>
        <Sider>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            items={menuItems}
            onClick={menuClick}
          />
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Router />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
