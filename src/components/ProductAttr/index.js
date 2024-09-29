import React, { Component } from 'react';
import { useModel } from 'umi';
import { Row, Col, Container } from 'react-bootstrap';
import Title from '../Title';

import './index.less';

function ProductAttr() {
  const { id, setProductId, product_detail } = useModel('productDetail');
  const listAttr = () => {
    const html = [];
    if (
      product_detail &&
      Object.prototype.toString.call(product_detail) === '[object Array]' &&
      product_detail.length
    ) {
      // eslint-disable-next-line no-unused-expressions
      product_detail.map((item, idx) => {
        html.push(
          <li key={idx}>
            <span className='name ellipsis' title={item.attribute_name}>
              {item.attribute_name || ''}
            </span>
            <span className='value ellipsis' title={item.attribute_value}>
              {item.attribute_value || ''}
            </span>
          </li>
        );
      });
    }
    return html;
  };
  return (
    <Container className='product-attr clearfix'>
      <Title title='common.title.attribute' />
      <div className='clearfix'>
        <ul>{listAttr()}</ul>
      </div>
    </Container>
  );
}

export default ProductAttr;
