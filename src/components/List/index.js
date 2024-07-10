import React, { Component } from 'react';
import { connect, history } from 'umi';
import './index.less';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }

  handleProductToDetail = (id) => {
    if (id) {
      this.setState({
        id
      });
      if (this.props.productToDetailCallback) {
        this.props.productToDetailCallback(id);
      }
    }
  };

  listHtml = () => {
    const html = [];
    const { productList } = this.props;
    // eslint-disable-next-line no-unused-expressions
    productList &&
      productList.length &&
      productList.map((item, idx) => {
        html.push(
          <li key={idx}>
            <div className='item' onClick={() => this.handleProductToDetail(item.id)}>
              <div className='img-box'>
                <img src={item.image_link[0]} />
              </div>
              <div className='title' title={item.title}>
                {item.title && item.title.length > 60 ? `${item.title.substring(0, 60)}...` : item.title}
              </div>
              <div className='price'>
                <i className='unit'>{item.monetary_unit}</i>
                <span className='value'>{item.sale_price ? item.sale_price : item.price}</span>
                <span className='original-value'>
                  -{((item.price - item.sale_price) / item.price).toFixed(2) * 100}%
                </span>
              </div>
            </div>
          </li>
        );
      });
    return html;
  };

  componentDidMount() {}

  render() {
    return (
      <div className='list-wrap'>
        <ul>{this.listHtml()}</ul>
      </div>
    );
  }
}

export default List;
