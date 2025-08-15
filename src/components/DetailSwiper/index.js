import React, { useEffect, useState } from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';
import { useModel } from 'umi';
import { useNavigate } from 'react-router-dom';
import './index.less';

function DetailSwiper(props) {
  const { product_detail } = useModel('productDetail');
  const [saleSkus, setSaleSkus] = useState(product_detail.saleSkusList);
  const [currentSaleSku, setCurrentSaleSku] = useState(product_detail.saleSkusList[0]);
  const [initSwiperImg, setSwiperImg] = useState([]);
  const [index, setIndex] = useState(0);
  const goToBack = () => {
    navigate(-1);
  };
  if (!props || !(props.image_link || props.additional_image_link)) {
    return false;
  }
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const navigate = useNavigate();
  const renderSwiperHtml = (list) => {
    const html = [];
    if (list && list.length > 0) {
      list.map((item, idx) => {
        html.push(
          <Carousel.Item key={idx} index={item.index}>
            <Image src={item.src} fluid />
          </Carousel.Item>
        );
      });
    }
    return html;
  };
  const selectSaleSku = (item, idx) => {
    const newSaleSkus = [];
    if (saleSkus && saleSkus[0]) {
      setIndex(item.index);
      saleSkus.forEach((item, index)=>{
        if (idx === index) {
          if (item.current && item.current == true) {
            newSaleSkus.push(Object.assign({},item, { current: false}));
          } else {
            newSaleSkus.push(Object.assign({},item, { current: true}));
          }

        } else {
          newSaleSkus.push(Object.assign({},item, { current: false}));
        }
      });
    }
    setSaleSkus(newSaleSkus);
    setCurrentSaleSku(item);
  };
  const cardHtmlSku = ()=>{
    const cardHtml = [];
    if (saleSkus && saleSkus[0]) {
      saleSkus.forEach((item,idx) => {
        if (item.saleType !== 'default') {
          cardHtml.push(
            <>
              <li className={`${item.current == true ? 'item current' : 'item'}`} key={`${item.product_main_id}_${item.product_id}_${item.id}`} id={`${item.product_main_id}_${item.product_id}_${item.id}`} onClick={()=>selectSaleSku(item, idx)}>
                <div className='box'>
                  {item.saleType === 'pattern' ? (<><div className='pattern'><Image src={`${item.pattern + '?x-oss-process=style/w480'}`} fluid /></div>
                  <div className='pattern-name ellipsis'>{item.pattern_name}</div></>): (<div className='sale-value ellipsis'>{item.saleValue}</div>)}
                </div>
              </li>
            </>
          );
        }
      });
    }
    return cardHtml;
  };

  const gtagEvent = (data) => {
    if (window.gtag && gtag && data && data.projectId && data.offer_id && currentSaleSku) {
      gtag('event', 'detail_buy_click', {
        'language': data.language,
        'title': data.title,
        'offer_id': data.offer_id,
        'product_id': data.product_id,
        'product_main_id': data.product_main_id,
        'projectId': data.projectId,
        'saleType': currentSaleSku.saleType,
        'saleValue': currentSaleSku.saleValue,
        'sale_price': currentSaleSku.sale_price,
        'monetary_unit': currentSaleSku.monetary_unit,
        'discount': currentSaleSku.discount,
        'price': currentSaleSku.price,
      });
    }
  };
  const buyLink = () => {
    let html = '';
    let defaultLink = 'https://www.amazon.co.jp/-/en/stores/LIMEETKET%E3%83%9A%E3%83%83%E3%83%88%E3%83%9B%E3%83%BC%E3%83%A0/page/E8D38BBB-5773-49C9-8A2F-0CC199CAC4C7';
    if (product_detail && product_detail.link && product_detail.link.indexOf('www.taobao.com') > -1) {
      html = (<a onClick={()=>gtagEvent(product_detail)} href={`${product_detail.mobile_link ? product_detail.mobile_link : product_detail.link}`} target="_blank" >淘宝购买</a>)
    } else {
      html = (<a onClick={()=>gtagEvent(product_detail)} href={defaultLink} target="_blank" >Go to Amazon to buy</a>)
    }
    return html;
  };

  useEffect (() => {
    let listImgs = [];
    const restSwiperImg = [];
    const restSkuList = [];
    if (product_detail && product_detail.image_link && product_detail.additional_image_link && product_detail.additional_image_link[0] && product_detail.saleSkusList) {
      // 主图
      if (product_detail.image_link) {
        listImgs.push(product_detail.image_link);
      }
      if (product_detail.additional_image_link && product_detail.additional_image_link[0]) {
        listImgs = listImgs.concat(product_detail.additional_image_link);
      }

      // 附属图
      listImgs.forEach((item, index)=>{
        restSwiperImg.push(Object.assign({}, {src: item, des: 'additional_image_link'}, { index: index }));
      });
      // sku 图
      if (product_detail.saleSkusList[0]) {
        product_detail.saleSkusList.forEach((item, idx)=>{
          const currentIndex = listImgs.length + idx;
          if (item.saleType === 'pattern') {
            restSwiperImg.push(Object.assign({}, {src: item.pattern, des: item.saleValue}, { index: currentIndex }));
          }
          if (idx === 0) {
            restSkuList.push(Object.assign({}, item, { index: currentIndex,  current: true}));
          } else {
            restSkuList.push(Object.assign({}, item, { index: currentIndex, current: false }));
          }

        });
      }
      setSaleSkus(restSkuList);
      setSwiperImg(restSwiperImg);
    } else {
      setSwiperImg([]);
    }
  }, [product_detail]);

  return (
    <>
      <Container className='detail-swiper clearfix'>
        <section className='swiper-container'>
          <Carousel data-bs-theme='dark' interval={3000} activeIndex={index} onSelect={handleSelect}>
            {renderSwiperHtml(initSwiperImg)}
          </Carousel>
        </section>
        <div className='arrow-left' onClick={goToBack} />
      </Container>
      <Container className='page-detail-sale-sku'>
        <div className='price-wrap clearfix'>
          <div className='price'>
            <i className='unit'>{currentSaleSku.monetary_unit}</i>
            <span className='value'>{currentSaleSku.sale_price}</span>
            <span className='del-value'>{currentSaleSku.price}</span>
            {currentSaleSku.discount > 0 && (<span className='original-value'>-{currentSaleSku.discount}%</span>)}
          </div>
          <div className='title'>
            {product_detail.title} {(currentSaleSku.saleValue && currentSaleSku.length > 1) && (<span>（{currentSaleSku.saleValue}）</span>)}
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
    </>
  );
}

export default DetailSwiper;
