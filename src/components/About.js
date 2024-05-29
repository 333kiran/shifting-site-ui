import React from "react";
import { Row, Col } from 'antd';

const AboutPage = () => {
    return (
        <div style={{ padding: '50px 20px', background: '#f0f2f5' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}> {/* Container with max-width and auto margins */}
                <Row justify="center" gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <img src="https://via.placeholder.com/600" alt="About Us" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <div style={{ textAlign: 'center' }}>
                            <h1>About Us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus nulla id cursus rhoncus. Curabitur ultricies ligula vitae quam tristique condimentum. Integer ut purus sed purus congue fermentum. Fusce euismod urna ac lectus pulvinar sodales. Nam at metus sit amet enim hendrerit convallis.</p>
                            <p>Nulla congue justo id libero vehicula, ac sagittis lorem volutpat. Nam interdum arcu a orci feugiat, a convallis metus semper. Donec volutpat efficitur justo, nec ultricies enim vestibulum at. Sed sit amet leo vitae ex dictum hendrerit nec at elit. Morbi convallis purus nec metus facilisis, et bibendum arcu tincidunt.</p>
                            <p>Quisque ullamcorper lorem ac dolor posuere, sed efficitur velit vestibulum. Sed nec scelerisque urna. Ut vel nulla at sapien tincidunt tempus. Phasellus laoreet sem et neque euismod, nec fermentum odio convallis. Cras eget tincidunt metus. Vivamus bibendum, mi a ultrices hendrerit, ligula velit pharetra magna, at aliquam risus elit non eros. Suspendisse a vehicula arcu.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default AboutPage;
