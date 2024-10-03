import { Nav } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useModel, history, useSelectedRoutes } from 'umi';
import QueryString from 'query-string';

import './index.less';

function CategoriesSide() {
  const routes = useSelectedRoutes();
  const { categories, setCategories, product_type_id, setProductTypeId } = useModel('categories');
  const { queryParams, setQueryParams } = useModel('productList');
  const setCurrentCategoriesHandler = (key) => {
    const list = [];
    if(key){
      categories && categories.length && categories.map(item => {
        if (key == item.key) {
          setProductTypeId(item.key);
          setQueryParams(Object.assign({}, queryParams, { product_type_id: item.key}));
          list.push(Object.assign({}, item, {active: true}));
        } else {
          list.push(Object.assign({}, item, {active: false}));
        }
      });
      setCategories(list);
    }
  };
  const initCurrentKey = ()=>{
    const query = QueryString.parse(window.location.search);
    if (query && query.key) {
      setCurrentCategoriesHandler(query.key);
    }
  };
  useEffect(()=>{
    initCurrentKey();
  }, []);
  const renderHtml = (props) => {
    const html = [];
    categories && categories.length && categories.map(item => {
      if (item && item.active) {
        html.push(<Nav.Link key={item.key} href={`/product/list.html?id=${item.key}`} onClick={()=>setCurrentCategoriesHandler(item.key)} active>{item.title}</Nav.Link>);
      } else {
        html.push(<Nav.Link key={item.key} href={`/product/list.html?id=${item.key}`} onClick={()=>setCurrentCategoriesHandler(item.key)}>{item.title}</Nav.Link>);
      }
    });
    return html;
  };
  return (
    <Nav className="flex-column categories-side">
      {renderHtml()}
    </Nav>
  );
}

export default CategoriesSide;
