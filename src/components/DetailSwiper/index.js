import React, { useEffect, useState } from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';
import { Swiper } from 'antd-mobile';
import './index.less';

function DetailSwiper(props) {
  console.log('props:', props);
  if (!props || !(props.image_link || props.additional_image_link)) {
    return false;
  }
  let list = [];
  if (props.image_link) {
    list.push(props.image_link);
  }
  if (props.additional_image_link) {
    list = list.concat(props.additional_image_link);
  }
  const bannerClick = (val) => {
    this.props.callback(val);
  };
  console.log('list:', list);
  const renderSwiperHtml = (list) => {
    const html = [];
    if (list && list.length > 0) {
      list.map((item, idx) => {
        html.push(
          <Carousel.Item key={idx}>
            <Image src={item} fluid />
          </Carousel.Item>
        );
      });
    }
    return html;
  };
  const goToBack = () => {
    if (this.props.goBackCallback) {
      this.props.goBackCallback();
    }
  };
  return (
    <Container className='detail-swiper clearfix'>
      <section className='swiper-container'>
        <Carousel data-bs-theme='dark' interval={3000}>
          {renderSwiperHtml(list)}
        </Carousel>
      </section>
      <div className='arrow-left' onClick={goToBack} />
    </Container>
  );
}

export default DetailSwiper;
