import React, { Component } from 'react';
import Title from '../Title';

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
        <div className='clearfix'>{this.imgList()}</div>
      </div>
    );
  }
}

export default ProductDetail;
