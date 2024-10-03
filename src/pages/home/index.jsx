import React, { Component } from 'react';
import { connect, history, FormattedMessage, Link } from 'umi';
import { Dropdown, Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import BannerSwiper from '@/components/BannerSwiper';
import Header from '@/components/Header';
import Categories from '@/components/Categories';
import List from '@/components/List';
import Title from '@/components/Title';
import Footer from '@/components/Footer';
import ICP from '@/components/Icp';

import './index.less';

function HomePage (){
  return (
    <>
      <Header from="home"></Header>
      <BannerSwiper></BannerSwiper>
      <Categories></Categories>
      <Container fluid className='list-wrap'>
        <Title title='common.title.sales' />
        <List from="home"></List>
        <Row>
          <Col>
            <div className='more-wrap clearfix'>
              <Link to='/product/list.html?key=all'> See more… </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
      <ICP></ICP>
    </>
  );
}

export default HomePage;
