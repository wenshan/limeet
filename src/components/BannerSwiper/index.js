import React, { useEffect, useState } from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';
import ResponsiveImage from '@/components/ResponsiveImage';
import { useModel, history } from 'umi';
import {
  getBanner,
  queryProductList,
  queryProductCategories,
  productDetail,
  queryProductGroup
} from '@/services/index';

import './index.less';

const whereParams = {
  channel: 'limeetpet',
  type: 'home'
};

function Banner() {
  const { initialState } = useModel('@@initialState');
  console.log('initialState:', initialState);
  const { projectId } = initialState;
  const [ swiperBanner, setSwiperBanner ] = useState([]);
  const getBannerFetch = async () => {
    const result = await getBanner({ projectId, ...whereParams });
    if (result && result.status == 200 && result.data && result.data && result.data.rows) {
      setSwiperBanner(result.data.rows);
    }
  };
  useEffect(() => {
    getBannerFetch();
  }, []);
  const bannerClick = (item) => {
    if (item && item.url) {
      if (item.url.indexOf('http') > 0) {
        window.location.href = item.url;
      } else {
        history.push(item.url);
      }
    }
  };
  const renderSwiperHtml = () => {
    const html = [];
    swiperBanner &&
      swiperBanner.length &&
      swiperBanner.map((item, idx) => {
        if (item.is_show && item.src) {
          html.push(
            <Carousel.Item key={idx} onClick={() => bannerClick(item)} title={item.name}>
              <Image src={item.src} fluid />
            </Carousel.Item>
          );
        }
      });
    return html;
  };

  return (
    <Container fluid>
      <Carousel data-bs-theme='dark' interval={3000}>
        {renderSwiperHtml()}
      </Carousel>
    </Container>
  );
}
export default Banner;
