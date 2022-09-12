import React from 'react';
import { useNavigate } from "react-router-dom"
import { Layout, Menu } from 'antd';
import { Router } from "../router";
import { menuItems } from "./columns";
import './index.scss';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const navigate = useNavigate()
  const menuClick = ({ key }: any) => {
    navigate(key);
  }
  return (
    <div className="app">
      <Layout className='app_layout' style={{height: "100%", display: "flex"}}>
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
        <Layout className="section">
          <Header></Header>
          <Content>
            <Router />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
