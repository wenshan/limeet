import React, { Component } from 'react';
import { connect, history } from 'umi';
import { SelectLang } from 'umi';
import BannerSwiper from '@/components/BannerSwiper';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Categories from '@/components/Categories';
import List from '@/components/List';
import Title from '@/components/Title';

import './index.less';

@connect((state) => ({
  swiperBanner: state.home.swiperBanner,
  hotProductList: state.product.hotProductList,
  productCategories: state.product.productCategories,
  currentPath: state.common.currentPath,
}))
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 'home',
      product_type_id: 0
    };
  }

  swpierClick = (val) => {
    if (val){
      if (val.indexOf('http') > -1) {
        window.document.location.href = val;
      } else {
        history.push(val);
      }
    }
  }

  gotoPage = (val) => {
    if (val){
      history.push(val);
    }
  }
  handelNavigationHeader = (val) => {
    if (val){
      this.props.dispatch({
        type: 'common/update',
        payload: {
          currentPath: val,
        }
      });
      history.push(val);
    }
  }
  handleClickCateCallback = (key) => {
    this.setState({
      product_type_id: key
    });
    this.props.dispatch({
      type: 'product/queryProductAll',
      payload: {
        current: 1,
        pageSize: 100,
        product_type_id: key,
        from: 'home',
      }
    });
  }
  productToDetailCallback = (id) => {
    this.props.dispatch({
      type: 'product/update',
      payload: {
        id
      }
    });
    history.push(`/detail.html?id=${id}`);
  }
  handelGoBack = () => {
    this.props.dispatch({
      type: 'common/update',
      payload: {
        currentPath: '/index.html',
      }
    });
    history.push('/index.html');
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'home/getBanner',
    });
    this.props.dispatch({
      type: 'product/queryProductCategories',
    });
    this.props.dispatch({
      type: 'product/queryProductAll',
      payload: {
        current: 1,
        pageSize: 10,
        limit: 10,
        from: 'home'
      }
    });
  }

  render() {
    return (
      <div className="page clearfix">
        <div className="home-page clearfix">
          <Header navigationCallback={this.handelNavigationHeader} currentPath={this.props.currentPath} goBackCallback={this.handelGoBack} from="home"></Header>
          <div className="swiper-wrap clearfix">
            <BannerSwiper swiperBanner={this.props.swiperBanner} callback={this.swpierClick}></BannerSwiper>
          </div>
          <Categories productCategories={this.props.productCategories} clickCateCallback={this.handleClickCateCallback}></Categories>
          <Title title="Highest Sales"></Title>
          <List productList={this.props.hotProductList} productToDetailCallback={this.productToDetailCallback}></List>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default HomePage;
