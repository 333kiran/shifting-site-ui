
import React from 'react';
import { Layout, Menu, Row, Col, Image, Tooltip } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/moversLogo.png';

const { Footer } = Layout;

const AppFooter = () => {
  const navigate = useNavigate();

  const handleMenuClick = (page) => {
    navigate(`/${page}`);
  };

  return (
    <Footer style={{ background: '#001529', color: '#fff', paddingTop: 0, paddingBottom: 2 }}>
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col xs={24} sm={12} md={8} lg={8} xl={8}>
          <div style={{ textAlign: 'center', padding: '5px' }}>
            <Image src={logo} alt="Company Logo" style={{ width: '80px' }} />
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Menu mode="horizontal" theme="dark" style={{ background: 'transparent', border: 'none', color: 'white', textAlign: 'center' }}>
            <Menu.Item key="home" onClick={() => handleMenuClick('home')}>Home</Menu.Item>
            <Menu.Item key="services" onClick={() => handleMenuClick('services')}>Services</Menu.Item>
            <Menu.Item key="about" onClick={() => handleMenuClick('about')}>About Us</Menu.Item>
            <Menu.Item key="support" onClick={() => handleMenuClick('support')}>Support</Menu.Item>
          </Menu>
        </Col>
        <Col xs={24} sm={24} md={4} lg={4} xl={4} style={{ textAlign: 'center' }}>
          <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">
            <Tooltip title="Facebook">
              <FacebookOutlined style={{ fontSize: '24px', color: '#fff', marginRight: '10px' }} />
            </Tooltip>
          </a>
          <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer">
            <Tooltip title="Twitter">
              <TwitterOutlined style={{ fontSize: '24px', color: '#fff', marginRight: '10px' }} />
            </Tooltip>
          </a>
          <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">
            <Tooltip title="Instagram">
              <InstagramOutlined style={{ fontSize: '24px', color: '#fff', marginRight: '10px' }} />
            </Tooltip>
          </a>
          <a href="https://www.linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer">
            <Tooltip title="Linkedin">
              <LinkedinOutlined style={{ fontSize: '24px', color: '#fff', marginRight: '10px' }} />
            </Tooltip>
          </a>
          <a href="mailto:info@yourcompany.com">
            <Tooltip title="Email">
              <MailOutlined style={{ fontSize: '24px', color: '#fff' }} />
            </Tooltip>
          </a>
        </Col>
      </Row>
      <div style={{ background: 'black', color: 'white', padding: '10px 0', textAlign: 'center', marginTop: 10, }}>Copyrights © 2024 Flybizz Services India Private Limited. All Rights Reserved</div>
    </Footer>
  );
};

export default AppFooter;
