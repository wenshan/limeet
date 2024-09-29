import React, { Component } from 'react';
import { connect, history, FormattedMessage } from 'umi';
import { Dropdown, Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import BannerSwiper from '@/components/BannerSwiper';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Categories from '@/components/Categories';
import List from '@/components/List';
import Title from '@/components/Title';
import ICP from '@/components/Icp';

import './index.less';

function HomePage (){
  return (
    <>
      <Header from="home"></Header>
      <BannerSwiper></BannerSwiper>
      <Categories></Categories>
      <List></List>
      <Footer></Footer>
      <ICP></ICP>
    </>
  );
}

export default HomePage;
