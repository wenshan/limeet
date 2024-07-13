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
    const { product_detail, additional_image_link, lifestyle_image_link, image_link, title, link, mobile_link, monetary_unit, sale_price, price} = this.props.productDetail;
    const mainProductImg = image_link.concat(additional_image_link) || [];
    return (
      <div className="page clearfix">
        <div className="page-detail clearfix">
          <DetailSwiper list={mainProductImg} callback={this.swpierClick} goBackCallback={this.handelGoBack} from="detail"></DetailSwiper>
          <ProductGroup></ProductGroup>
          <div className='price-wrap clearfix'>
            <div className='price'>
              <i className='unit'>{monetary_unit}</i>
              <span className='value'>{sale_price}</span>
              <span className='original-value'>-{((price - sale_price) / price).toFixed(2) * 100}%</span>
            </div>
            <div className='title'>
              {title}
            </div>

          </div>
          <div className='submit-button clearfix'>
            <a href={`${mobile_link ? mobile_link : link}`} target="_blank" >Go to Amazon to buy</a>
          </div>
          <ProductAttr product_detail={product_detail}></ProductAttr>
          <ProductDetail list={lifestyle_image_link}></ProductDetail>
        </div>
      </div>
    );
  }
}

export default DetailPage;
