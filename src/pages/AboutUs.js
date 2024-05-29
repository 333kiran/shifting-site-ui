import React from 'react';
import { Row, Col, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const AboutUs = () => {
    return (
        <div style={{ backgroundColor: '#f9f9f9', padding: '50px 20px' }}>
            <Row gutter={[16, 16]} justify="center"  >
                <Col xs={24} sm={20} md={18} lg={16} xl={20} >
                    <Title level={2} style={{ textAlign: 'center', marginBottom: '30px', color: '#1a237e',fontSize:'2.2vmax',fontFamily:"fantasy" }}>Welcome to Carry India Movers</Title>
                    <Paragraph style={{ textAlign: 'justify', color: '#333',fontSize:'1.2vmax' }}>
                        Welcome to Carry India Movers, where excellence meets experience in the realm of packing and moving services across India. With a rich history of successful relocations and a steadfast dedication to superior service, Carry India Movers emerges as your trusted partner for all your relocation needs.
                    </Paragraph>
                    <Paragraph style={{ textAlign: 'justify', color: '#333',fontSize:'1.2vmax' }}>
                        Our journey is steeped in years of experience, honing our skills and refining our processes to deliver nothing short of excellence. As a premier provider of packing and moving solutions, we understand the intricate demands of relocation, whether it's a local shift or a cross-country move. Our commitment to excellence permeates every aspect of our service, ensuring that each relocation is executed with precision and care.
                    </Paragraph>
                    <Paragraph style={{ textAlign: 'justify', color: '#333',fontSize:'1.2vmax' }}>
                        At Carry India Movers, we recognize that no two moves are alike. That's why we take a personalized approach to every relocation, tailoring our services to meet your specific requirements and preferences. Whether you're moving your home, office, or vehicle, we have the expertise and resources to ensure a seamless transition to your new destination.
                    </Paragraph>
                    <Paragraph style={{ textAlign: 'justify', color: '#333',fontSize:'1.2vmax' }}>
                        Our comprehensive relocation services encompass every stage of the moving process, from meticulous packing to secure transportation and efficient unpacking. With a focus on reliability and efficiency, we strive to exceed your expectations at every turn, making your relocation experience stress-free and rewarding.
                    </Paragraph>
                    <Paragraph style={{ textAlign: 'justify', color: '#333',fontSize:'1.2vmax' }}>
                        When you choose Carry India Movers, you're choosing a partner who is committed to your satisfaction and dedicated to making your move a success. With our unwavering commitment to excellence and a track record of delivering results, Carry India Movers stands ready to be your trusted partner on your journey to a new beginning.
                    </Paragraph>
                    <Title level={3} style={{ marginBottom: '20px', color: '#1a237e' }}>Why Choose Carry India Movers?</Title>
                    <Paragraph style={{ textAlign: 'justify', color: '#333',fontSize:'1.2vmax' }}>
                        Embarking on a relocation journey can often feel like navigating through a maze of uncertainties and challenges. However, at Carry India Movers, we aim to transform this daunting task into a seamless and stress-free experience. Here's why choosing us for your packing and moving needs is a decision you won't regret:
                    </Paragraph>
                    <ul style={{ listStyleType: 'none', paddingLeft: '20px', color: '#333',fontSize:'1.2vmax',lineHeight:1.7 }}>
                        <li style={{ marginBottom: '10px' }}>
                            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '10px' }} />
                            <span>
                                <strong>Professionalism Beyond Compare:</strong> Our team comprises seasoned professionals who bring a wealth of experience and expertise to the table. From the moment you entrust us with your relocation, rest assured that your belongings are in the hands of dedicated individuals committed to providing unparalleled packing and moving services. Whether it's meticulously packing your cherished possessions or ensuring their safe transport to your new destination, professionalism is at the core of everything we do.
                            </span>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '10px' }} />
                            <span>
                                <strong>Safety is Our Priority:</strong> At Carry India Movers, we understand the intrinsic value of your belongings, both in terms of sentiment and material worth. That's why we prioritize safety above all else. From utilizing sturdy packaging materials to employing secure transport methods, we leave no stone unturned in safeguarding your items throughout the journey. With us, you can have peace of mind knowing that your belongings will reach their destination intact and undamaged.
                            </span>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '10px' }} />
                            <span>
                                <strong>Reliability You Can Count On:</strong> When it comes to relocation, timeliness is of the essence. At Carry India Movers, we understand the importance of prompt and efficient service. Whether you're moving locally or nationally, you can rely on us to deliver timely assistance every step of the way. From the initial planning stages to the final delivery of your belongings, we are committed to ensuring a smooth and hassle-free relocation experience.
                            </span>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '10px' }} />
                            <span>
                                <strong>Affordable Excellence:</strong> We believe that quality service shouldn't come with a hefty price tag. That's why we offer competitive rates without compromising on the quality of our services. With transparent pricing and no hidden charges, Carry India Movers provides cost-effective solutions tailored to your budgetary needs. With us, you can rest assured that you're getting exceptional value for your money.
                            </span>
                        </li>
                        <li style={{ marginBottom: '10px' }}>
                            <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '10px' }} />
                            <span>
                                <strong>Customer Satisfaction Guaranteed:</strong> Your satisfaction is our utmost priority at Carry India Movers. We understand that each relocation is unique, and we go the extra mile to tailor our services to meet your specific requirements. From the initial consultation to the final delivery, we are committed to exceeding your expectations and making your moving experience as convenient and hassle-free as possible. With Carry India Movers, your satisfaction is not just a goal – it's a guarantee.
                            </span>
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
};

export default AboutUs;
