

import React from "react";
import { Row, Col } from 'antd';
import { AccountBookFilled, LaptopOutlined, ClockCircleOutlined, EnvironmentOutlined } from '@ant-design/icons';
import HomePage from "../components/MainSCreen";
import AboutPage from "../components/About";
import Services from "../components/Services";
import FAQSection from "../components/FAQSection";

export default function Home() {
    return (
        <>
            <HomePage />
            <div style={{ background: '#f0f2f5', padding: '20px' }}>
                <p style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center', color: '#001529' }}>Process of Booking our services</p>
                <Row gutter={[16, 16]} justify="center">
                    <Col xs={24} sm={12} md={6} lg={6}>
                        <div style={{ textAlign: 'center', background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <AccountBookFilled style={{ fontSize: '3rem', marginBottom: '10px', color: '#1890ff' }} />
                            <p style={{ fontSize: '18px', marginBottom: '10px', color: '#1890ff' }}>Step 1</p>
                            <p style={{ fontSize: '16px', marginBottom: '10px' }}>Share Your Requirement</p>
                            <p>Let us know what goods you need to shift and your preferred time.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6}>
                        <div style={{ textAlign: 'center', background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <LaptopOutlined style={{ fontSize: '3rem', marginBottom: '10px', color: '#52c41a' }} />
                            <p style={{ fontSize: '18px', marginBottom: '10px', color: '#52c41a' }}>Step 2</p>
                            <p style={{ fontSize: '16px', marginBottom: '10px' }}>Book the Services</p>
                            <p>Choose the services you need and book them online.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6}>
                        <div style={{ textAlign: 'center', background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <ClockCircleOutlined style={{ fontSize: '3rem', marginBottom: '10px', color: '#faad14' }} />
                            <p style={{ fontSize: '18px', marginBottom: '10px', color: '#faad14' }}>Step 3</p>
                            <p style={{ fontSize: '16px', marginBottom: '10px' }}>Schedule Pickup</p>
                            <p>Schedule the pickup time as per your convenience.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6}>
                        <div style={{ textAlign: 'center', background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <EnvironmentOutlined style={{ fontSize: '3rem', marginBottom: '10px', color: '#eb2f96' }} />
                            <p style={{ fontSize: '18px', marginBottom: '10px', color: '#eb2f96' }}>Step 4</p>
                            <p style={{ fontSize: '16px', marginBottom: '10px' }}>Relax and Track</p>
                            <p>Relax while our movers handle your goods, and track your shipment.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
