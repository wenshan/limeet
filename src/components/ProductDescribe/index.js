import { useEffect, useState } from 'react';
import { useModel } from 'umi';
import { Row, Col, Container } from 'react-bootstrap';
import Title from '../Title';

import './index.less';

function ProductHighlight() {
  const { id, setProductId, product_detail } = useModel('productDetail');
  const { description } = product_detail;
  return (
    <Container className='product-describe clearfix'>
      <Title title='common.title.detail' />
      <div className='clearfix container' dangerouslySetInnerHTML={{ __html: description ? description : '' }} />
    </Container>
  );
}

export default ProductHighlight;
