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
import ICP from '@/components/Icp';


import './index.less';

function DetailPage() {
  const { projectId, currentPath, setCurrentPath } = useModel('common');
  const { product_detail, setProductId } = useModel('productDetail');
  const query = QueryString.parse(window.location.search);
  if (!query || !(query && query.id) || !product_detail) {
    return false;
  }
  console.log('product_detail:', product_detail);
  const { title, link, mobile_link, monetary_unit, discount, sale_price, price, image_link, additional_image_link} = product_detail;

  return (
  <>
      <DetailSwiper from="detail" image_link={image_link} additional_image_link={additional_image_link}></DetailSwiper>
      {false && (<ProductGroup></ProductGroup>)}
      <Container className='page-detail'>
        <div className='price-wrap clearfix'>
          <div className='price'>
            <i className='unit'>{monetary_unit}</i>
            <span className='value'>{sale_price}</span>
            <span className='del-value'>{price}</span>
            <span className='original-value'>-{discount}%</span>
          </div>
          <div className='title'>
            {title}
          </div>
        </div>
        <div className='submit-button clearfix'>
          <a href={`${mobile_link ? mobile_link : link}`} target="_blank" >Go to Amazon to buy</a>
        </div>
      </Container>
      <ProductAttr></ProductAttr>
      <ProductDescribe />
      <ProductHighlight />
      <ProductDetail></ProductDetail>
      <ICP></ICP>
  </>
  );
}

export default DetailPage;
