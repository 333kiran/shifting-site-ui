import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import OurServices from './pages/OurServices';

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ margin: 0, padding: 0 }}>
        <Header />
          <div style={{marginTop:60}}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/about" element={<AboutUs />} />
              <Route exact path="/services" element={<OurServices />} />
              <Route exact path="/support" element={<ContactUs />} />
            </Routes>
          </div>
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;
