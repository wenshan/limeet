import { useEffect, useState } from 'react';
import { Dropdown, Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { getBanner, queryProductList, queryProductCategories, productDetail, queryProductGroup} from '@/services/index';
import { useRequest } from 'ahooks';
import { useModel, history, FormattedMessage, Link } from 'umi';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CategoriesSide from '@/components/CategoriesSide';
import List from '@/components/List';

import './index.less';

function ProductList (props) {
  return (<>
    <Header></Header>
    <Container fluid className='list-wrap'>
      <Row>
        <Col sm={4} md={3} lg={2}>
          <CategoriesSide></CategoriesSide>
        </Col>
        <Col>
          <List></List>
        </Col>
      </Row>
    </Container>
    <Footer></Footer>
    </>
  );
};

export default ProductList;
