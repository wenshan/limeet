import { useEffect, useState } from 'react';
import { Dropdown, Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { useModel } from 'umi';
import { getBanner, queryProductList, queryProductCategories, productDetail, queryProductGroup} from '@/services/index';
import { useRequest } from 'ahooks';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CategoriesSide from '@/components/CategoriesSide';
import List from '@/components/List';

import './index.less';

function ProductList (props) {
  return (<>
    <Header></Header>
    <Container fluid>
      <div className='product-list-wrap'>
        <div className="categories-list">
          <CategoriesSide></CategoriesSide>
        </div>
        <div className="product-list">
          <List></List>
        </div>
      </div>
    </Container>
    <Footer></Footer>
    </>
  );
};

export default ProductList;
