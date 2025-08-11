import React, { Component } from 'react';
import { FormattedMessage } from 'umi';
import { useEffect, useState } from 'react';
import { Row, Col, Container, Image, Modal, Button } from 'react-bootstrap';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ICP from '@/components/Icp';


import './index.less';

function About() {
  const [wechatStatus, setWechatStatus] = useState(false);
  const handleClose = () => setWechatStatus(false);
  const handleShow = () => setWechatStatus(true);
  return (
    <>
      <Header from="about"></Header>
      <Container fluid>
        <div className="about-page clearfix">
          <div className="des-tx clearfix">
            <h1><FormattedMessage id="common.about.name" /></h1>
            <p><FormattedMessage id="common.about.tip" /></p>
            <img src="https://img.limeetpet.com/limeet/factory.png"></img>
            <p></p>
            <p>
              <img src="https://img.limeetpet.com/limeet/jiaozhang.png" />
              <FormattedMessage id='common.about.des' />
            </p>
          </div>
          <div className='company clearfix'>
            <h1>Shanghai Erka International Trade Co., Ltd</h1>
            <ul>
              <li><span><FormattedMessage id="footer.product.factory.address" />：</span>2nd Floor, 1270 Luofen Road, Baoshan District, Shanghai, China</li>
              <li><span>Email：</span><a href="mailto:hou_ve@qq.com">hou_ve@qq.com</a></li>
            </ul>
          </div>
          <div className='contact clearfix'>
            <div className='youtube'><a target='_blank' href="https://www.youtube.com/channel/UCoIs9wNHv3RFkB5Wm6KEHCA"><img src="https://img.limeetpet.com/limeet/icon/icons8-youtube-240.png" /></a></div>
            <div className='facebook'><a target='_blank' href="https://www.facebook.com/limeet.366183"><img src="https://img.limeetpet.com/limeet/icon/icons8-facebook-240.png" /></a></div>
            <div className='wechat' onClick={handleShow}><img src="https://img.limeetpet.com/limeet/icon/icons8-whatsapp-240.png" /></div>
            <Modal show={wechatStatus} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Image thumbnail src="https://img.limeetpet.com/limeet/icon/whatApp.png"></Image>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </Container>
      <Footer></Footer>
      <ICP></ICP>
    </>
  );
}

export default About;
