import React, { Component } from 'react';
import { connect, history } from 'umi';
import { FormattedMessage } from 'umi';
import { useEffect, useState } from 'react';
import { Row, Col, Container, Image, Modal, Button } from 'react-bootstrap';
import Header from '@/components/Header';
import ICP from '@/components/Icp';


import './index.less';

function About(){
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
          <img src="https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/factory.png"></img>
          <p>
            <img src="https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/jiaozhang.png"/> <FormattedMessage id='common.about.des' />
          </p>
        </div>
        <div className='company clearfix'>
          <h1>Shanghai Erka International Trade Co., Ltd</h1>
          <ul>
            <li><span>Address: </span>2nd Floor, 1270 Luofen Road, Baoshan District, Shanghai, China</li>
            <li><span>Email: </span><a href="mailto:hangzhououhao@limeet.com">hangzhououhao@limeet.com</a></li>
          </ul>
        </div>
        <div className='contact clearfix'>
          <div className='youtube'><a href="https://www.youtube.com/channel/UCoIs9wNHv3RFkB5Wm6KEHCA"><img src="https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/youtube-filled.png" /></a></div>
          <div className='wechat' onClick={handleShow}><img src="https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/wechat-filled.png" /></div>
          <Modal show={wechatStatus} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Image thumbnail src="https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/wechat.png"></Image>
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
    <ICP></ICP>
    </>
  );
}

export default About;
