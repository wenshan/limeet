import React, { Component } from 'react';
import Title from '../Title';

import './index.less';

class ProductHighlight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ''
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className='product-describe clearfix'>
        <div
          className='clearfix container'
          dangerouslySetInnerHTML={{ __html: this.props.description ? this.props.description : '' }}
        />
      </div>
    );
  }
}

export default ProductHighlight;
