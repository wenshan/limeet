import React, { Component } from 'react';
import { connect, history } from 'umi';
import { FormattedMessage } from 'umi';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ICP from '@/components/Icp';
import { Row, Col, Container, Image } from 'react-bootstrap';
import { useRequest } from 'ahooks';

import './index.less';

function Brand (){
  return (
    <>
      <Header from="home"></Header>
      <Container fluid>
        <div className='brand-wrapper'>
          <h2><FormattedMessage id='common.nav.brand.story' /></h2>
          <div className='text'>
            <p><FormattedMessage id='brand.page.story.list01' /></p>
            <p><FormattedMessage id='brand.page.story.list02' /></p>
            <Image src="https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/brand/brand.jpeg" fluid></Image>
            <p></p>
            <p><FormattedMessage id='brand.page.story.list03' /></p>
            <p><FormattedMessage id='brand.page.story.list04' /></p>
            <p><FormattedMessage id='brand.page.story.list05' /></p>
            <p></p>
          </div>
        </div>
        <div className='brand-wrapper'>
          <h2><FormattedMessage id='common.nav.brand.idea' /></h2>
          <div className='text'>
            <p><FormattedMessage id='brand.page.idea' /></p>
            <p></p>
          </div>
        </div>
        <div className='brand-wrapper'>
          <h2><FormattedMessage id='common.nav.brand.keywords' /></h2>
          <div className='text'>
            <p><FormattedMessage id='brand.page.keywords.list01' /></p>
            <p><FormattedMessage id='brand.page.keywords.list02' /></p>
            <p><FormattedMessage id='brand.page.keywords.list03' /></p>
            <p><FormattedMessage id='brand.page.keywords.list04' /></p>
            <p></p>
          </div>
        </div>
        <div className='brand-wrapper'>
          <h2><FormattedMessage id='common.nav.brand.image' /></h2>
          <div className='text'>
            <p><FormattedMessage id='brand.page.image.list01' /></p>
            <h4><FormattedMessage id='brand.page.image.list02' /></h4>
            <p><FormattedMessage id='brand.page.image.list03' /></p>
            <Image src="https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/brand/158813789963349rwvw%20.jpeg" fluid></Image>
            <p></p>
          </div>
        </div>
        <div className='brand-wrapper'>
          <h2><FormattedMessage id='common.nav.brand.strength' /></h2>
          <div className='text'>
            <p><FormattedMessage id='brand.page.strength.list01' /></p>
            <p><FormattedMessage id='brand.page.strength.list02' /></p>
            <p><FormattedMessage id='brand.page.strength.list03' /></p>
            <p><FormattedMessage id='brand.page.strength.list04' /></p>
            <Image src="https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/factory.png" fluid></Image>
            <p></p>
            <p></p>
          </div>
        </div>

      </Container>
      <Footer></Footer>
    </>
  );
}

export default Brand;
