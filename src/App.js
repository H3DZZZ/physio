import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaPhoneAlt, FaMapPin } from 'react-icons/fa';
import logo from './assets/logo.png';
import './App.css';

function App() {
  return (
    <div style={{ backgroundColor: '#f0f0f0', height: '100vh' }}>
      <header style={{ width: '100%', textAlign: 'center', padding: '20px 0', backgroundColor: '#ffffff' }}>
        <img src={logo} alt="logo" style={{ width: '350px', height: 'auto' }}/>
      </header>
      <Container className="container">
        <Row className="row">
          <Col xs={12} className="buttonCol">
            <a href="https://instagram.com/jc.physiotherapy?igshid=ZWQyN2ExYTkwZQ==" className="button">
              <FaInstagram style={{height: '20px', width: '20px', marginRight: '10px'}}/>
              Instagram
            </a>
          </Col>
          <Col xs={12} className="buttonCol">
            <a href="https://maps.app.goo.gl/XHaYzbLDb4xJpnRz7?g_st=iw" className="button">
              <FaMapPin style={{height: '20px', width: '20px', marginRight: '10px'}}/>
              Google Maps
            </a>
          </Col>
          <Col xs={12} className="buttonCol">
            <a href="tel:+96171136186" className="button">
              <FaPhoneAlt style={{height: '20px', width: '20px', marginRight: '10px'}}/>
              Contact Us
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
