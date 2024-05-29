// import React, { useState, useEffect } from 'react';
// import { Layout, Menu, Row, Col, Drawer } from 'antd';
// import { Link } from 'react-router-dom';
// import { MenuOutlined } from '@ant-design/icons';
// import moversLOgo from '../assets/images/moversLogo.png'

// const { Header } = Layout;

// const AppHeader = () => {
//     const [visible, setVisible] = useState(false);
//     const [showMenuButton, setShowMenuButton] = useState(false);
//     const logoImage = "https://media.istockphoto.com/id/1331491686/vector/element-design.jpg?s=612x612&w=0&k=20&c=QIMRS2IPiQyyTZJR_G1JAjH_ErBBkrDPtQe2GBNgm2w=";

//     const showDrawer = () => {
//         setVisible(true);
//     };

//     const onClose = () => {
//         setVisible(false);
//     };

//     useEffect(() => {
//         const handleResize = () => {
//             setShowMenuButton(window.innerWidth <= 650);
//         };

//         handleResize(); // Check on component mount
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return (
//         <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
//             <Row justify="space-between" align="middle">
//                 <Col xs={12}>
//                     <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
//                         {/* <img src={moversLOgo} alt="Logo" style={{ width: '60px', marginRight: '15px' }} /> */}
//                         {/* <span style={{ fontSize: '1vmax', fontWeight: 'bold', color: 'white' }}>Your Company Name</span> */}
//                     </div>
//                 </Col>
//                 {showMenuButton && (
//                     <Col xs={12} style={{ textAlign: 'right' }}>
//                         <MenuOutlined onClick={showDrawer} style={{ fontSize: '2vmax', color: 'white', cursor: 'pointer' }} />
//                     </Col>
//                 )}
//                 {!showMenuButton && (
//                     <Col xs={12}>
//                         <Menu theme="dark" mode="horizontal"  style={{ lineHeight: '64px', float: 'right' }}>
//                             <Menu.Item key="1">
//                                 <Link to="/">Home</Link>
//                             </Menu.Item>
//                             <Menu.Item key="2">
//                                 <Link to="/services">Services</Link>
//                             </Menu.Item>
//                             <Menu.Item key="3">
//                                 <Link to="/about">About</Link>
//                             </Menu.Item>
//                             <Menu.Item key="4">
//                                 <Link to="/support">Support</Link>
//                             </Menu.Item>
//                         </Menu>
//                     </Col>
//                 )}
//             </Row>
//             <Drawer
//                 title="Menu"
//                 placement="right"
//                 closable={false}
//                 onClose={onClose}
//                 visible={visible}
//             >
//                 <Menu theme="dark" mode="vertical">
//                     <Menu.Item key="1">
//                         <Link to="/">Home</Link>
//                     </Menu.Item>
//                     <Menu.Item key="2">
//                         <Link to="/services">Services</Link>
//                     </Menu.Item>
//                     <Menu.Item key="3">
//                         <Link to="/about">About</Link>
//                     </Menu.Item>
//                     <Menu.Item key="4">
//                         <Link to="/support">Support</Link>
//                     </Menu.Item>
//                 </Menu>
//             </Drawer>
//         </Header>
//     );
// };

// export default AppHeader;




import React, { useState, useEffect } from 'react';
import { Layout, Menu, Row, Col, Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import moversLOgo from '../assets/images/moversLogo.png'

const { Header } = Layout;

const AppHeader = () => {
    const [visible, setVisible] = useState(false);
    const [showMenuButton, setShowMenuButton] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setShowMenuButton(window.innerWidth <= 650);
        };

        handleResize(); // Check on component mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Row justify="space-between" align="middle">
                <Col xs={12}>
                    <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={moversLOgo} alt="Logo" style={{ width: '60px', marginRight: '15px' }} />
                        {/* <span style={{ fontSize: '1vmax', fontWeight: 'bold', color: 'white' }}>Your Company Name</span> */}
                    </div>
                </Col>
                {showMenuButton && (
                    <Col xs={12} style={{ textAlign: 'right' }}>
                        <MenuOutlined onClick={showDrawer} style={{ fontSize: '2vmax', color: 'white', cursor: 'pointer' }} />
                    </Col>
                )}
                <Drawer
                    title="Menu"
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    width="50%"
                    bodyStyle={{ backgroundColor: '#001529', color: 'white' }}
                >
                    <Menu theme="dark" mode="vertical" style={{ backgroundColor: 'transparent' }}>
                        <Menu.Item key="1">
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/services">Services</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/about">About</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/support">Support</Link>
                        </Menu.Item>
                    </Menu>
                </Drawer>
                {!showMenuButton && (
                    <Col xs={12}>
                        <Menu theme="dark" mode="horizontal"  style={{ lineHeight: '64px', float: 'right' }}>
                            <Menu.Item key="1">
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/services">Services</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/about">About</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/support">Support</Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                )}
            </Row>
        </Header>
    );
};

export default AppHeader;
