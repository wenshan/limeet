import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './index.less';

function ICP(){
  return (
    <Container className='footer-icp'>
      <p><a href='https://beian.miit.gov.cn/#/Integrated/index' target='_blank'>浙ICP备2023008986号</a></p>
    </Container>
  );
}

export default ICP
