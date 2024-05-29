
// import React from 'react';
// import { Layout, Row, Col } from 'antd';
// import { WhatsAppOutlined,PhoneOutlined,MobileOutlined } from '@ant-design/icons';
// import logo from '../assets/images/moversLogo.png';
// import Title from 'antd/es/typography/Title';

// const { Content } = Layout;

// const HomePage = () => {
//   return (
//     <Layout>
//       <Content>
//         <div style={{ background: 'url("https://www.toppackersmoverspune.in/img/slider/3.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', padding: '10px', }}>
//           <div style={{ textAlign: 'center', marginTop: '50px' }}>
//             <img src={logo} alt="Company Logo" style={{ width: '250px', marginBottom: '20px' }} />
            // <Title style={{ color: '#fff', fontSize: '1.8vmax', marginBottom: '10px' ,fontWeight:'bolder'}}>One of the best, Carry India Movers is your trusted partner for all your relocation needs.</Title>
            // <p style={{ color: '#fff', fontSize: '1.4vmax', marginBottom: '20px' ,fontWeight:450}}>LET OUR TEAM MAKE YOUR MOVING CONVENIENT AND EASY.</p>
//           </div>
//           <Row justify="center" style={{ marginTop: '20px' }}>
//             <Col xs={24} sm={20} md={16} lg={12} xl={12}>
            

// <div style={{ background: '#001529', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    
//     <div style={{ fontSize: '18px', color:'white' }}>
//         Phone <PhoneOutlined style={{ fontSize: '24px', marginRight: '10px' ,color:'white'}} />: 9718313145, 9718313181
//     </div>
// </div>

//             </Col>
//           </Row>
//         </div>
//       </Content>
//     </Layout>
//   );
// };

// export default HomePage;



import React from 'react';
import { Layout, Row, Col } from 'antd';
import { WhatsAppOutlined, PhoneOutlined, MobileOutlined } from '@ant-design/icons';
import logo from '../assets/images/moversLogo.png';
import Title from 'antd/es/typography/Title';
import packersBg from '../assets/images/packers-bg.jpg';
import packersBgMobile from '../assets/images/packers-bg-mobile.jpg';

const { Content } = Layout;

const HomePage = () => {
  // Define CSS within a JavaScript template literal
  const styles = `
    .background-container {
      background-image: url(${require('../assets/images/packers-bg.jpg')});
      background-size: cover;
      background-position: center;
      padding: 10px;
      
    }

    .content-container {
      text-align: center;
      margin-top: 50px;
    }

    .logo {
      width: 250px;
      margin-bottom: 20px;
    }


    .title {
      color: white;
      font-size: 2vmax;
      margin-bottom: 10px;
      font-weight: bolder;
      z-index:1;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

    }

    .subtitle {
      color: white;
      font-size: 1.4vmax;
      margin-bottom: 20px;
      font-weight: 450;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }
   
    @media screen and (max-width: 767px) {
      .background-container {
        background-image: url(${require('../assets/images/packers-bg-mobile.jpg')}); /* Replace with your small image URL */
      }
      .logo {
        width: 180px;
      }
      .title {
        color:black;
        font-size: 4.5vmin;
        z-index:1;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
      }

      .subtitle {
        color:white;
        font-size: 2.5vmin;
        font-weight:bolder;
        z-index:1;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
      }
     
    }
  `;

  // Inject the CSS into the document's head
  React.useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.type = 'text/css';
    styleTag.appendChild(document.createTextNode(styles));
    document.head.appendChild(styleTag);
  }, []);

  return (
    <Layout>
      <Content>
        <div className="background-container">
          <div className="content-container">
            <img src={logo} alt="Company Logo" className="logo" />
            <p className="title">One of the best, Carry India Movers is your trusted partner for all your relocation needs.</p>
            <p className="subtitle">LET OUR TEAM MAKE YOUR MOVING CONVENIENT AND EASY.</p>

          </div>
          <Row justify="center" style={{ marginTop: '20px' }}>
            <Col xs={24} sm={20} md={16} lg={12} xl={12}>
            

<div style={{ background: '#001529', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    
    <div style={{ fontSize: '18px', color:'white' }}>
        Phone <PhoneOutlined style={{ fontSize: '24px', marginRight: '10px' ,color:'white'}} />: 9718313145, 9718313181
    </div>
</div>

            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default HomePage;
