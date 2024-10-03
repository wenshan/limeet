import Title from '../Title';
import Tool from '@/utils/tool';
import { useEffect, useState } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import ResponsiveImage from '@/components/ResponsiveImage';
import { useModel, history, FormattedMessage, Link } from 'umi';

import './index.less';

function Categories() {
  const { categories, setCategories, product_type_id, setProductTypeId } = useModel('categories');
  const handleCategoryClick = (key) => {
    const newProductCategories = [];
    categories &&
      categories.length &&
      categories.map((item) => {
        if (item.key === key) {
          newProductCategories.push(Object.assign({}, item, { action: true }));
        } else {
          newProductCategories.push(Object.assign({}, item, { action: false }));
        }
      });
    setCategories(newProductCategories);
    setProductTypeId(key);
    // history.push(`/product/list.html?key=${key}`);
  };
  const listHtml = () => {
    const html = [];
    categories &&
      categories.length &&
      categories.map((item, idx) => {
        if (item.action) {
          html.push(
            <Col sm={6} key={item.key}>
              <div className='item action' onClick={() => handleCategoryClick(item.key)}>
                <Link to={`/product/list.html?key=${item.key}`}>
                  <span className='text ellipsis'>{item.title}</span> <i className='icon arrow-tx-right' />
                </Link>
              </div>
            </Col>
          );
        } else {
          html.push(
            <Col sm={6} key={item.key}>
              <div className='item' onClick={() => handleCategoryClick(item.key)}>
                <Link to={`/product/list.html?key=${item.key}`}>
                  <span className='text ellipsis'>{item.title}</span> <i className='icon arrow-tx-right' />
                </Link>
              </div>
            </Col>
          );
        }
      });
    return html;
  };
  return (
    <Container fluid>
      <div className='categories clearfix'>
        <Title title='common.title.categories' />
        <div className='menu clearfix'>
          <Row>{listHtml()}</Row>
        </div>
        <div className='describe clearfix'>
          <p>
            <img src='https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/jiaozhang.png' />
            <FormattedMessage id='common.about.des' />
            <Link to='/brand.html?key=brand'>See More</Link>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Categories;
