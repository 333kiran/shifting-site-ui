import React from "react";
import { Collapse } from 'antd';

const { Panel } = Collapse;

const FAQSection = () => {
    return (
        <div style={{ padding: '50px 20px', background: '#f0f2f5' }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1>Frequently Asked Questions</h1>
                <h3>Have a question? Find answers below.</h3>
            </div>
            <Collapse accordion>
                <Panel header="Question 1: What is Lorem Ipsum?" key="1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula purus nec ex rutrum, id tempus felis tempor. Mauris tincidunt justo in sem laoreet, nec suscipit libero aliquet.</p>
                </Panel>
                <Panel header="Question 2: How can I contact support?" key="2">
                    <p>You can contact our support team by emailing support@example.com or calling +123-456-7890.</p>
                </Panel>
                <Panel header="Question 3: Can I cancel my subscription?" key="3">
                    <p>Yes, you can cancel your subscription at any time. Please contact our support team for assistance.</p>
                </Panel>
                {/* Add more FAQ panels as needed */}
            </Collapse>
        </div>
    );
}

export default FAQSection;
