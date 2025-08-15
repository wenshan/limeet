import { useEffect, useState } from 'react';
import { useModel } from 'umi';
import { Row, Col, Container, Card, Image, Toast } from 'react-bootstrap';

import './index.less';
function ProductSaleSku() {
  const { product_detail } = useModel('productDetail');
  const [saleSkus, setSaleSkus] = useState(product_detail.saleSkusList);
  const [showSku, setShowSku] = useState(true);
  const [currentSaleSku, setCurrentSaleSku] = useState(product_detail.saleSkusList[0]);

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
        if (item.saleType !== 'default') {
          cardHtml.push(
            <>
              <li className={`${item.current == true ? 'item current' : 'item'}`} key={`${item.product_main_id}_${item.product_id}_${item.id}`} id={`${item.product_main_id}_${item.product_id}_${item.id}`} onClick={()=>selectSaleSku(item, idx)}>
                <div className='box'>
                  {item.saleType === 'pattern' ? (<><div className='pattern'><Image src={`${item.pattern + '?x-oss-process=style/w480'}`} fluid /></div><div className='pattern-name ellipsis'>{item.pattern_name}</div><div className='show-img'><Image src={`${item.pattern + '?x-oss-process=style/w480'}`} /></div></>): (<div className='sale-value ellipsis'>{item.saleValue}</div>)}
                </div>
              </li>
            </>
          );
        }
      });
    }
    return cardHtml;
  }

  const gtagEvent = (data) => {
    if (window.gtag && gtag && data && data.projectId && data.offer_id) {
      gtag('event', 'detail_buy_click', {
        'language': data.language,
        'offer_id': data.offer_id,
        'product_id': data.product_id,
        'product_main_id': data.product_main_id,
        'projectId': data.projectId,
      });
    }
  }
  const buyLink = () => {
    let html = '';
    let defaultLink = 'https://www.amazon.co.jp/-/en/stores/LIMEETKET%E3%83%9A%E3%83%83%E3%83%88%E3%83%9B%E3%83%BC%E3%83%A0/page/E8D38BBB-5773-49C9-8A2F-0CC199CAC4C7';
    if (product_detail && product_detail.link && product_detail.link.indexOf('www.taobao.com') > -1) {
      html = (<a onClick={()=>gtagEvent(product_detail)} href={`${product_detail.mobile_link ? product_detail.mobile_link : product_detail.link}`} target="_blank" >淘宝购买</a>)
    } else {
      html = (<a href={defaultLink} target="_blank" >Go to Amazon to buy</a>)
    }
    return html;
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
        {buyLink()}
      </div>
    </Container>
  );
}
export default ProductSaleSku;
