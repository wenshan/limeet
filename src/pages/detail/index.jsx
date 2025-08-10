import { useEffect, useState } from 'react';
import { Dropdown, Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { useModel, history } from 'umi';
import QueryString from 'query-string';
import ProductGroup from '@/components/ProductGroup';
import DetailSwiper from '@/components/DetailSwiper';
import ProductDetail from '@/components/ProductDetail';
import ProductAttr from '@/components/ProductAttr';
import ProductHighlight from '@/components/ProductHighlight';
import ProductDescribe from '@/components/ProductDescribe';
import ProductSaleSku from '@/components/ProductSaleSku';
import Footer from '@/components/Footer';
import ICP from '@/components/Icp';


import './index.less';

function DetailPage() {
  const { projectId, currentPath, setCurrentPath } = useModel('common');
  const { product_detail, setProductId } = useModel('productDetail');
  const query = QueryString.parse(window.location.search);
  if (!query || !(query && query.id) || !product_detail) {
    return false;
  }
  const { title, link, mobile_link, monetary_unit, discount, sale_price, price, image_link, additional_image_link } = product_detail;
  return (
    <>
      <DetailSwiper from="detail" image_link={image_link} additional_image_link={additional_image_link}></DetailSwiper>
      {false && (<ProductGroup></ProductGroup>)}
      {product_detail && product_detail.saleSkus && product_detail.saleSkus[0] && (<ProductSaleSku></ProductSaleSku >)}
      <ProductAttr></ProductAttr>
      <ProductDescribe />
      <ProductHighlight />
      <ProductDetail></ProductDetail>
      <Footer></Footer>
      <ICP></ICP>
    </>
  );
}

export default DetailPage;
