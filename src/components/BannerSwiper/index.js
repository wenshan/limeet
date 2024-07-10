import React, { Component } from 'react';
import { Swiper } from 'antd-mobile';
import './index.less';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.swiperBanner
    };
  }

  bannerClick = (e) => {
    console.log(e);
    // this.props.callback(val);
  };

  renderSwiperHtml = () => {
    const html = [];
    const { swiperBanner } = this.props;
    swiperBanner &&
      swiperBanner.length &&
      swiperBanner.map((item, idx) => {
        html.push(
          <Swiper.Item key={idx} onClick={this.bannerClick}>
            <div className='swiper-slide' key={idx}>
              <img src={item.src} />
            </div>
          </Swiper.Item>
        );
      });
    return html;
  };

  render() {
    const { swiperBanner } = this.props;
    return (
      <div className='banner-swiper clearfix'>
        <section className='swiper-container'>
          <div className='swiper-wrapper'>
            {swiperBanner && swiperBanner.length > 0 ? (
              <Swiper autoplay={true} autoplayInterval={6000} loop={true} defaultIndex={0}>
                {this.renderSwiperHtml()}
              </Swiper>
            ) : null}
          </div>
        </section>
      </div>
    );
  }
}

export default Banner;
