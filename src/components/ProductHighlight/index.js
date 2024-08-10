import React, { Component } from 'react';
import Title from '../Title';

import './index.less';

class ProductDescribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_highlight: ''
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className='product-highlight clearfix'>
        <div
          className='clearfix container'
          dangerouslySetInnerHTML={{ __html: this.props.product_highlight ? this.props.product_highlight : '' }}
        />
      </div>
    );
  }
}

export default ProductDescribe;
