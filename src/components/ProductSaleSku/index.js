import { useEffect, useState } from 'react';
import { useModel } from 'umi';
import { Row, Col, Container, Card, Image, Toast } from 'react-bootstrap';

import './index.less';
function ProductSaleSku() {
  const { product_detail } = useModel('productDetail');
  const [saleSkus, setSaleSkus] = useState(product_detail.saleSkus);
  const [showSku, setShowSku] = useState(true);
  const [currentSaleSku, setCurrentSaleSku] = useState(product_detail.saleSkus[0]);

  const selectSaleSku = (item, idx) => {
    const newSaleSkus = [];
    if (saleSkus && saleSkus[0]) {
      saleSkus.forEach((item,index)=>{
        if (idx === index) {
          if (item.current && item.current == true) {
            newSaleSkus.push(Object.assign({},item, { current: false}));
            setShowSku(false);
          } else {
            newSaleSkus.push(Object.assign({},item, { current: true}));
            setShowSku(true);
          }

        } else {
          newSaleSkus.push(Object.assign({},item, { current: false}));
        }
      });
    }
    setSaleSkus(newSaleSkus);
    setCurrentSaleSku(item);
  };

  const toggleShowSku = ()=> {
    setShowSku(false);
  }

  const cardHtmlSku = ()=>{
    const cardHtml = [];
    if (saleSkus && saleSkus[0]) {
      saleSkus.forEach((item,idx) => {
        cardHtml.push(
          <>
            <li className={`${item.current == true ? 'item current' : 'item'}`} key={`${item.product_main_id}_${item.product_id}`} onClick={()=>selectSaleSku(item, idx)}>
              <div className='box'>
                {item.saleType === 'pattern' ? (<><div className='pattern'><Image src={`${item.pattern + '?x-oss-process=style/w480'}`} fluid /></div><div className='pattern-name ellipsis'>{item.pattern_name}</div><div className='show-img'><Image src={`${item.pattern + '?x-oss-process=style/w480'}`} /></div></>): (<div className='sale-value ellipsis'>{item.saleValue}</div>)}
              </div>
            </li>
          </>
        );
      });
    }
    return cardHtml;
  }

  return (
    <Container className='page-detail-sale-sku'>
      <div className='price-wrap clearfix'>
        <div className='price'>
          <i className='unit'>{currentSaleSku.monetary_unit}</i>
          <span className='value'>{currentSaleSku.sale_price}</span>
          <span className='del-value'>{currentSaleSku.price}</span>
          {currentSaleSku.discount > 0 && (<span className='original-value'>-{currentSaleSku.discount}%</span>)}
        </div>
        <div className='title'>
          {product_detail.title} {currentSaleSku.saleValue && (<span>（{currentSaleSku.saleValue}）</span>)}
        </div>
      </div>
      <div className='sale-sku'>
        <ul>
          {currentSaleSku && cardHtmlSku()}
        </ul>
      </div>
      <div className='submit-button clearfix'>
        <a href={`${product_detail.mobile_link ? product_detail.mobile_link : product_detail.link}`} target="_blank" >Go to Amazon to buy</a>
      </div>
    </Container>
  );
}
export default ProductSaleSku;
