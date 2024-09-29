import { useEffect, useState } from 'react';
import { useModel } from 'umi';
import { Row, Col, Container, Image } from 'react-bootstrap';
import Title from '../Title';
import './index.less';
function ProductDetail() {
  const { id, setProductId, product_detail } = useModel('productDetail');
  const { image_link, additional_image_link, lifestyle_image_link } = product_detail;
  const imgList = () => {
    const html = [];
    lifestyle_image_link &&
      lifestyle_image_link.length &&
      lifestyle_image_link.map((item, idx) => {
        html.push(<Image src={item} fluid key={idx} />);
      });
    return html;
  };
  return <Container className='product-detail-img-list'>{imgList()}</Container>;
}

export default ProductDetail;
