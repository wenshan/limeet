import React, { Component } from 'react';
import { connect, history } from 'umi';
import QueryString from 'query-string';
import ProductGroup from '@/components/ProductGroup';
import DetailSwiper from '@/components/DetailSwiper';
import ProductDetail from '@/components/ProductDetail';
import ProductAttr from '@/components/ProductAttr';

import './index.less';

@connect((state) => ({
  image_link: state.detail.image_link,
  productDetail: state.product.productDetail,
  currentPath: state.common.currentPath,
}))
class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  gotoPage = (val) => {
    if (val){
      history.push(val);
    }
  }
  swpierClick = (val) => {
    if (val){
      history.push(val);
    }
  }
  handelGoBack = () => {
    this.props.dispatch({
      type: 'common/update',
      payload: {
        currentPath: '/product.html',
      }
    });
    history.push('/product.html');
  }
  componentDidMount() {
    const search = window.document.location.search;
    const query = QueryString.parse(search);
    if (query && query.id) {
      this.props.dispatch({
        type: 'product/update',
        payload: {
          id: query.id
        }
      });
      this.props.dispatch({
        type: 'product/queryProductDetail',
        payload: {
          id: query.id
        }
      });
    }
  }

  render() {
    const { product_detail, additional_image_link, image_link} = this.props.productDetail;
    return (
      <div className="page clearfix">
        <div className="page-detail clearfix">
          <DetailSwiper list={image_link} callback={this.swpierClick} goBackCallback={this.handelGoBack} from="detail"></DetailSwiper>
          <ProductGroup></ProductGroup>
          <div className='price-wrap clearfix'>
            <div className='price'>
              <i className='unit'>$</i>
              <span className='value'>29.9</span>
              <span className='original-value'>-20%</span>
            </div>
            <div className='title'>
              Pet Collar Dog Collar Puppy Reflective Collar Adjustable Cat collar Safety Buckle Bell Neck Strap
            </div>

          </div>
          <div className='submit-button clearfix'>
            Go to Amazon to buy
          </div>
          <ProductAttr product_detail={product_detail}></ProductAttr>
          <ProductDetail list={additional_image_link}></ProductDetail>
        </div>
      </div>
    );
  }
}

export default DetailPage;
