import React, { Component } from 'react';
import styled from 'styled-components';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import logoImg from './logo.png';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Main extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    console.log(this.props);
    return (
      <StyledLayout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <LogoWrapper>
            <Logo src={logoImg} />
          </LogoWrapper>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item>
              <Icon type="file-text" />
              <span>Pages</span>
            </Menu.Item>
            <Menu.Item>
              <Icon type="file-ppt" />
              <span>Posts</span>
            </Menu.Item>
            <SubMenu
              title={
                <span>
                  <Icon type="book" />
                  <span>Collections</span>
                </span>
              }
            >
              <Menu.Item>Tom</Menu.Item>
              <Menu.Item>Bill</Menu.Item>
              <Menu.Item>Alex</Menu.Item>
            </SubMenu>
            <Menu.Item>
              <Icon type="hdd" />
              <span>Data Files</span>
            </Menu.Item>
            <Menu.Item>
              <Icon type="file" />
              <span>Static Files</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <StyledHeader>Your awesome title</StyledHeader>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <ContentBody>{this.props.children}</ContentBody>
          </Content>
          <Footer>Jekyll Admin © 2017</Footer>
        </Layout>
      </StyledLayout>
    );
  }
}

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledHeader = styled(Header)`
  background: #fff;
  padding: 0 16px;
  font-weight: bold;
`;

const ContentBody = styled.div`
  padding: 24px;
  background: #fff;
  min-height: 360;
`;

const LogoWrapper = styled.div`
  text-align: center;
  padding: 10px 0;
  background: ${props => props.theme.darkGray};
`;

const Logo = styled.img`
  height: 39px;
`;
