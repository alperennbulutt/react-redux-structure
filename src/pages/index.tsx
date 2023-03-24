import React, { useState } from 'react';
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import DashboardTable from '../components/dashboard/table';
import DashboardTable2 from '../components/dashboard/table2';

const { Header, Content, Footer, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const DashboardPage: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [menuEvent, setMenuEvent] = useState('1');

  const HandleMenuClick = (e: string) => {
    console.log('pressed', e);
    setMenuEvent(e);
  };

  const ReturnPage = () => {
    if (menuEvent === '1') {
      return <DashboardTable />;
    } else if (menuEvent === '2') {
      return <DashboardTable2 />;
    } else {
      return <DashboardTable />;
    }
  };
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              items={items2}
              onClick={(e) => HandleMenuClick(e.key)}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            {ReturnPage()}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Design</Footer>
    </Layout>
  );
};

export default DashboardPage;
