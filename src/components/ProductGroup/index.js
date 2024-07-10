import React, { Component } from 'react';
import './index.less';

class ProductGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className='product-group clearfix'>
        <div className='prev'>prev</div>
        <ul>
          <li>
            <div className='item'>
              <div className='img-box'>
                <img src='https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/%E4%B8%BB%E5%9B%BE_1.jpg' />
              </div>
              <div className='title'>Pet Collar Bells for Dogs and Cats, 22mm, 14Colors…</div>
              <div className='price'>
                <i className='unit'>$</i>
                <span className='value'>29.9</span>
                <span className='original-value'>-20%</span>
              </div>
            </div>
          </li>
          <li>
            <div className='item'>
              <div className='img-box'>
                <img src='https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/%E4%B8%BB%E5%9B%BE_1.jpg' />
              </div>
              <div className='title'>Pet Collar Bells for Dogs and Cats, 22mm, 14Colors…</div>
              <div className='price'>
                <i className='unit'>$</i>
                <span className='value'>29.9</span>
                <span className='original-value'>-20%</span>
              </div>
            </div>
          </li>
          <li>
            <div className='item'>
              <div className='img-box'>
                <img src='https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/%E4%B8%BB%E5%9B%BE_1.jpg' />
              </div>
              <div className='title'>Pet Collar Bells for Dogs and Cats, 22mm, 14Colors…</div>
              <div className='price'>
                <i className='unit'>$</i>
                <span className='value'>29.9</span>
                <span className='original-value'>-20%</span>
              </div>
            </div>
          </li>
          <li>
            <div className='item'>
              <div className='img-box'>
                <img src='https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/%E4%B8%BB%E5%9B%BE_1.jpg' />
              </div>
              <div className='title'>Pet Collar Bells for Dogs and Cats, 22mm, 14Colors…</div>
              <div className='price'>
                <i className='unit'>$</i>
                <span className='value'>29.9</span>
                <span className='original-value'>-20%</span>
              </div>
            </div>
          </li>
        </ul>
        <div className='next'>next</div>
      </div>
    );
  }
}

export default ProductGroup;
