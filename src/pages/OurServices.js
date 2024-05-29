import React from 'react';
import { Row, Col, Typography, Card } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import residentBG from '../assets/images/resident-bg.webp';
import commercialBG from '../assets/images/commercial-bg.avif';
import vehicleBg from '../assets/images/vehicle-bg.jpg';

const { Title, Paragraph } = Typography;

const OurServices = () => {
    const serviceVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                type: 'spring',
                damping: 10,
                stiffness: 100,
            },
        },
    };

    return (
        <div style={{ backgroundColor: '#fff', padding: '50px 20px' }}>
            <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={20} md={18} lg={16} xl={14}>
                    <Title level={2} style={{ textAlign: 'center', marginBottom: '30px', color: '#1a237e',fontSize:'2vmax'  }}>Our Comprehensive Services</Title>
                    <Paragraph style={{ textAlign: 'justify', color: 'black',color:"#1a237e",fontSize:'1vmax'  }}>
                        At Carry India Movers, we pride ourselves on offering a comprehensive suite of packing and moving services tailored to meet all your relocation needs. From residential to commercial moves, and even vehicle transportation, we're here to make your transition smooth and stress-free. Here's a closer look at our range of services:
                    </Paragraph>

                    {/* Service Cards */}
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={12} lg={8}>
                            <motion.div
                                variants={serviceVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <Card
                                    cover={<img alt="Residential Moving" src={residentBG} />}
                                    actions={[
                                        // <CheckCircleOutlined key="residential" style={{ color: '#52c41a' }} />,
                                    ]}
                                    hoverable
                                    style={{ backgroundColor: '#ffa940', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                                >
                                    <Card.Meta title="Residential Moving" description="Moving into a new home is an exciting but challenging endeavor. Our residential moving services are designed to alleviate the stress of relocation, ensuring a seamless transition to your new space." />
                                </Card>
                            </motion.div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8}>
                            <motion.div
                                variants={serviceVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <Card
                                    cover={<img alt="Commercial Moving" src={commercialBG} />}
                                    actions={[
                                        // <CheckCircleOutlined key="commercial" style={{ color: '#52c41a' }} />,
                                    ]}
                                    hoverable
                                    style={{ backgroundColor: '#40a9ff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                                >
                                    <Card.Meta title="Commercial Moving" description="When it comes to relocating your business, efficiency is key. At Carry India Movers, we understand the unique challenges of commercial moves and work closely with you to minimize downtime and ensure a seamless transition to your new location." />
                                </Card>
                            </motion.div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={8}>
                            <motion.div
                                variants={serviceVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <Card 
                                    cover={<img alt="Vehicle Transportation" src={vehicleBg} />}
                                    actions={[
                                        // <CheckCircleOutlined key="vehicle" style={{ color: '#52c41a' }} />,
                                    ]}
                                    hoverable
                                    style={{ backgroundColor: '#73d13d', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                                >
                                    <Card.Meta style={{paddingTop:2,}} title="Vehicle Transportation" description="Need to move your vehicles? Our vehicle transportation services are designed to transport your cars, motorcycles, or other vehicles safely and securely to your new destination." />
                                </Card>
                            </motion.div>
                        </Col>
                    </Row>

                    <Paragraph style={{ textAlign: 'justify', color: '#1a237e', marginTop: '30px',fontSize:'1.4vmax' }}>
                        <strong>Tips for a Successful Move:</strong>
                    </Paragraph>
                    <ul style={{ listStyleType: 'none', paddingLeft: '20px', color: '#1a237e',fontSize:'1vmax'  }}>
                        <li style={{ marginBottom: '10px' }}>
                            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '10px' }} />
                            <span>Start Early and Plan Thoroughly</span>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '10px' }} />
                            <span>Declutter and Streamline</span>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '10px' }} />
                            <span>Pack Strategically and Efficiently</span>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '10px' }} />
                            <span>Secure Valuables and Important Documents</span>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '10px' }} />
                            <span>Communicate Effectively with Your Movers</span>
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
};

export default OurServices;
