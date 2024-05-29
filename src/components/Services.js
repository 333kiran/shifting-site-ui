import React from "react";
import { Row, Col, Card } from 'antd';

const { Meta } = Card;

const Services = () => {
    return (
        <div style={{ padding: '50px 20px', background: '#f0f2f5' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h1>Our Services</h1>
                <h3>Discover what we offer</h3>
            </div>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card
                        hoverable
                        style={{ width: '100%' }}
                        cover={<img alt="Service 1" src="https://via.placeholder.com/300" style={{ height: '200px', objectFit: 'cover' }} />}
                    >
                        <Meta title="Service 1" description="Description of Service 1" />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card
                        hoverable
                        style={{ width: '100%' }}
                        cover={<img alt="Service 2" src="https://via.placeholder.com/300" style={{ height: '200px', objectFit: 'cover' }} />}
                    >
                        <Meta title="Service 2" description="Description of Service 2" />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card
                        hoverable
                        style={{ width: '100%' }}
                        cover={<img alt="Service 3" src="https://via.placeholder.com/300" style={{ height: '200px', objectFit: 'cover' }} />}
                    >
                        <Meta title="Service 3" description="Description of Service 3" />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card
                        hoverable
                        style={{ width: '100%' }}
                        cover={<img alt="Service 4" src="https://via.placeholder.com/300" style={{ height: '200px', objectFit: 'cover' }} />}
                    >
                        <Meta title="Service 4" description="Description of Service 4" />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card
                        hoverable
                        style={{ width: '100%' }}
                        cover={<img alt="Service 5" src="https://via.placeholder.com/300" style={{ height: '200px', objectFit: 'cover' }} />}
                    >
                        <Meta title="Service 5" description="Description of Service 5" />
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <Card
                        hoverable
                        style={{ width: '100%' }}
                        cover={<img alt="Service 6" src="https://via.placeholder.com/300" style={{ height: '200px', objectFit: 'cover' }} />}
                    >
                        <Meta title="Service 6" description="Description of Service 6" />
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Services;
