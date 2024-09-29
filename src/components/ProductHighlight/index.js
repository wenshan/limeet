import { useEffect, useState } from 'react';
import { useModel } from 'umi';
import { Row, Col, Container } from 'react-bootstrap';
import Title from '../Title';

import './index.less';

function ProductHighlight() {
  const { id, setProductId, product_detail } = useModel('productDetail');
  const { product_highlight } = product_detail;
  return (
    <Container className='product-highlight clearfix'>
      <div className='clearfix' dangerouslySetInnerHTML={{ __html: product_highlight ? product_highlight : '' }} />
    </Container>
  );
}

export default ProductHighlight;
