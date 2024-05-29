import React from 'react';
import { Form, Input, Button, Row, Col, Typography, message } from 'antd';
import axios from 'axios';

import contactUsImage from '../assets/images/contact-us-writing.svg';

const { Title } = Typography;

const ContactUs = () => {


    const onFinish = async (values) => {
        try {
            // Send form data to the server
            const response = await axios.post('YOUR_API_ENDPOINT', values);

            // Display success message from the server
            message.success(response.data.message);
            
            // Reset form fields on success
            form.resetFields();
        } catch (error) {
            // Display error message from the server
            message.error(error.response.data.message);
        }
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
        },
    };

    const [form] = Form.useForm();

    return (
        <div style={{ background: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '100%',  backgroundColor: 'white', padding: '50px', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
                <Row gutter={[16, 16]} align="middle">
                    <Col xs={24} sm={13}>
                        <div style={{ textAlign: 'center' }}>
                            <img src={contactUsImage} alt="Contact Us" style={{ maxWidth: '50%', height: 'auto', borderRadius: '10px' }} />
                        </div>
                    </Col>
                    <Col xs={24} sm={10}>
                        <div>
                            <Title level={2} style={{ textAlign: 'center', marginBottom: '30px', fontFamily: 'Arial, sans-serif', color: '#1a237e' }}>Contact Us</Title>
                            <Form
                                form={form}
                                name="contact-form"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                layout="vertical"
                                validateMessages={validateMessages}
                            >
                                <Form.Item
                                    name="name"
                                    rules={[{ required: true, message: 'Please input your name!' }]}
                                >
                                    <Input placeholder="Your Name" style={{ borderRadius: '5px', background: '#c5cae9' }} />
                                </Form.Item>

                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email!' }]}
                                >
                                    <Input type="email" placeholder="Your Email" style={{ borderRadius: '5px', background: '#c5cae9' }} />
                                </Form.Item>

                                <Form.Item
                                    name="message"
                                    rules={[{ required: true, message: 'Please input your message!' }]}
                                >
                                    <Input.TextArea placeholder="Your Message" rows={4} style={{ borderRadius: '5px', background: '#c5cae9' }} />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" style={{ width: '100%', borderRadius: '5px', background: '#1a237e', color: 'white',outline:'none' }}>
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ContactUs;
