import React, { Component } from 'react';
import Title from '../Title';
import Tool from '@/utils/tool';
import './index.less';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_type_id: 19681319,
      productCategories: []
    };
  }

  handleCategoryClick = (key) => {
    const { productCategories } = this.state;
    const newProductCategories = [];
    // eslint-disable-next-line no-unused-expressions
    productCategories &&
      productCategories.length &&
      productCategories.map((item) => {
        if (item.key === key) {
          newProductCategories.push(Object.assign({}, item, { action: true }));
        } else {
          newProductCategories.push(Object.assign({}, item, { action: false }));
        }
      });
    this.setState({
      product_type_id: key,
      productCategories: newProductCategories
    });
    if (this.props.clickCateCallback) {
      this.props.clickCateCallback(key);
    }
  };

  listHtml = () => {
    const html = [];
    const { productCategories, product_type_id } = this.state;
    // eslint-disable-next-line no-unused-expressions
    productCategories &&
      productCategories.length &&
      productCategories.map((item, idx) => {
        if (item.key === product_type_id) {
          html.push(
            <li
              className={`action ${Tool.isOdd(idx) ? 'ml20' : ''}`}
              key={item.key}
              onClick={() => this.handleCategoryClick(item.key)}
            >
              <span className='text ellipsis'>{item.title}</span> <i className='icon arrow-tx-right' />
            </li>
          );
        } else {
          html.push(
            <li
              className={`${Tool.isOdd(idx) ? 'ml20' : ''}`}
              key={item.key}
              onClick={() => this.handleCategoryClick(item.key)}
            >
              <span className='text ellipsis'>{item.title}</span> <i className='icon arrow-tx-right' />
            </li>
          );
        }
      });
    return html;
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-next-line no-empty
    if (this.props.productCategories !== nextProps.productCategories) {
      this.setState({
        productCategories: nextProps.productCategories
      });
    }
  }

  render() {
    return (
      <div className='categories clearfix'>
        <Title title='Categories' />
        <div className='menu clearfix'>
          <ul className='clearfix'>{this.listHtml()}</ul>
        </div>
        <div className='describe clearfix'>
          <p>
            Welcome to LimeetPet We are your best companions, providing a wide range of high-quality pet supplies and
            services for you and your pets.
            <a harf='#'>See More</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Categories;
