import React, { Component } from 'react';
import './index.less';

class ProductGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productItemGroup: {},
      current: 1,
      pageSize: 4
    };
  }

  listAttr = () => {
    const html = [];
    // if (result.data.rows && result.data.rows.length) {
    const { productItemGroup } = this.state;
    console.log('productItemGroup:', productItemGroup);
    if (
      productItemGroup &&
      Object.prototype.toString.call(productItemGroup.rows) === '[object Array]' &&
      productItemGroup.rows.length
    ) {
      // eslint-disable-next-line no-unused-expressions
      productItemGroup.rows.map((item, idx) => {
        html.push(
          <li key={`${item.id}_${idx}`}>
            <div className='item'>
              <div className='img-box'>
                <img src={item.image_link[0]} />
              </div>
              <div className='title'>{item.title}</div>
              <div className='price'>
                <i className='unit'>{item.monetary_unit}</i>
                <span className='value'>{item.sale_price}</span>
                <span className='original-value'>
                  -{((item.price - item.sale_price) / item.price).toFixed(2) * 100}%
                </span>
              </div>
            </div>
          </li>
        );
      });
    }
    return html;
  };

  prev = () => {
    const { current } = this.state;
    if (this.props.prevCallback) {
      this.props.prevCallback();
    }
  };
  next = () => {
    const { current } = this.state;
    if (this.props.nextCallback) {
      this.props.nextCallback();
    }
  };

  componentDidMount() {}
  UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-next-line no-empty
    if (this.props.productItemGroup !== nextProps.productItemGroup) {
      this.setState({
        productItemGroup: nextProps.productItemGroup,
        current: nextProps.current
      });
    }
  }

  render() {
    return (
      <div className='product-group clearfix'>
        <div className='prev' onClick={this.prev}>
          prev
        </div>
        <ul>{this.listAttr()}</ul>
        <div className='next' onClick={this.next}>
          next
        </div>
      </div>
    );
  }
}

export default ProductGroup;
