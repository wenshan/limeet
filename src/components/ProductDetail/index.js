import React, { Component } from 'react';
import Title from '../Title';
import ProductHighlight from '@/components/ProductHighlight';
import ProductDescribe from '@/components/ProductDescribe';

import './index.less';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  imgList = () => {
    const html = [];
    const { list } = this.props;
    if (!list || !list.length) return html;
    // eslint-disable-next-line no-unused-expressions
    list &&
      list.length &&
      list.map((item, idx) => {
        html.push(<img src={item} key={idx} />);
      });
    return html;
  };
  componentDidMount() {}

  render() {
    if (!this.props.list || !this.props.list.length) return;
    return (
      <div className='product-detail clearfix'>
        <Title title='common.title.detail' />
        <div className='clearfix container'>
          <div className='rich-text-editor'>
            <ProductDescribe description={this.props.description} />
          </div>
          <div className='rich-text-editor'>
            <ProductHighlight product_highlight={this.props.product_highlight} />
          </div>
          <div>{this.imgList()}</div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
