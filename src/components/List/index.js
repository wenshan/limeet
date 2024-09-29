import { useEffect, useState } from 'react';
import { FormattedMessage, history } from 'umi';
import { Row, Col, Container, Image, Link } from 'react-bootstrap';
import { useModel } from 'umi';
import Title from '@/components/Title';
import './index.less';

function List() {
  const { productList } = useModel('productList');
  const handleProductToDetail = (id) => {
    if (id) {
      // history.push(`/detail.html?id=${id}`);
    }
  };

  const listHtml = () => {
    const html = [];
    productList &&
      productList.rows &&
      productList.rows.length &&
      productList.rows.map((item, idx) => {
        html.push(
          <Col key={idx} xs={6} sm={4} xxl={3}>
            <div className='item' onClick={() => handleProductToDetail(item.id)}>
              <a href={`/detail.html?id=${item.id}`}>
                <div className='img-box'>
                  <Image src={item.image_link} fluid />
                </div>
                <div className='title' title={item.title}>
                  {item.title && item.title.length > 60 ? `${item.title.substring(0, 60)}...` : item.title}
                </div>
                <div className='price'>
                  <i className='unit'>{item.monetary_unit}</i>
                  <span className='value'>{item.sale_price ? item.sale_price : item.price}</span>
                  <span className='del-value'>{item.price}</span>
                  <span className='original-value'>-{item.discount}%</span>
                </div>
              </a>
            </div>
          </Col>
        );
      });
    return html;
  };

  return (
    <Container fluid className='list-wrap'>
      <Title title='common.title.sales' />
      <Row>{listHtml()}</Row>
    </Container>
  );
}

export default List;
