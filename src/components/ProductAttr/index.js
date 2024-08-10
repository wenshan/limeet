import React, { Component } from 'react';
import Title from '../Title';

import './index.less';

class ProductAttr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_detail: []
    };
  }

  listAttr = () => {
    const html = [];
    const { product_detail } = this.state;
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

  componentDidMount() {}
  UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-next-line no-empty
    if (this.props.product_detail !== nextProps.product_detail) {
      this.setState({
        product_detail: nextProps.product_detail
      });
    }
  }

  render() {
    return (
      <div className='product-attr clearfix'>
        <Title title='common.title.attribute' />
        <div className='clearfix'>
          <ul>{this.listAttr()}</ul>
        </div>
      </div>
    );
  }
}

export default ProductAttr;
