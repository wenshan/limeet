import React, { Component } from 'react';
import { connect, history } from 'umi';
import Header from '@/components/Header';
import Categories from '@/components/Categories';
import List from '@/components/List';
import Title from '@/components/Title';

import './index.less';

@connect((state) => ({
  productList: state.product.productList,
  productCategories: state.product.productCategories,
  currentPath: state.common.currentPath,
}))
class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  gotoPage = (val) => {
    if (val){
      history.push(val);
    }
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
  handelNavigationHeader = (val) => {
    console.log(val);
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
        from: 'product',
      }
    });
  };

  handelGoBack = () => {
    this.props.dispatch({
      type: 'common/update',
      payload: {
        currentPath: '/index.html',
      }
    });
    history.push('/index.html');
  };
  componentDidMount() {
    this.props.dispatch({
      type: 'product/queryProductCategories',
    });
    this.props.dispatch({
      type: 'product/queryProductAll',
      payload: {
        current: 1,
        pageSize: 20,
        product_type_id: 48887087,
        from: 'product'
      }
    });
  }

  render() {
    return (
      <div className="page clearfix">
        <div className="page-list clearfix">
          <Header navigationCallback={this.handelNavigationHeader} currentPath={this.props.currentPath} goBackCallback={this.handelGoBack} from="product"></Header>
          <Categories productCategories={this.props.productCategories} clickCateCallback={this.handleClickCateCallback}></Categories>
          <Title title="Product List"></Title>
          <List productList={this.props.productList} productToDetailCallback={this.productToDetailCallback}></List>
        </div>
      </div>
    );
  }
}

export default ProductListPage;
