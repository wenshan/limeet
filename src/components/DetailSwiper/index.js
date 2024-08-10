import React, { Component } from 'react';
import { Swiper } from 'antd-mobile';
import './index.less';

class DetailSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // eslint-disable-next-line no-empty
    if (this.props.list !== nextProps.list) {
      this.setState({
        list: nextProps.list
      });
    }
  }

  bannerClick = (val) => {
    this.props.callback(val);
  };

  renderSwiperHtml = () => {
    const html = [];
    const { list } = this.state;
    if (list && Object.prototype.toString.call(list) === '[object Array]' && list.length > 0) {
      list.map((item, idx) => {
        html.push(
          <Swiper.Item key={`sw-${idx}`}>
            <div className='swiper-slide' key={`swd-${idx}`}>
              <img src={item} />
            </div>
          </Swiper.Item>
        );
      });
    } else {
      html.push(
        <div className='swiper-slide' key={list}>
          <img src={list} />
        </div>
      );
    }
    return html;
  };

  goToBack = () => {
    if (this.props.goBackCallback) {
      this.props.goBackCallback();
    }
  };

  render() {
    console.log('from:', this.props.from);
    return (
      <div className='detail-swiper clearfix'>
        <section className='swiper-container'>
          <Swiper autoplay={true} autoplayInterval={6000} loop={true} defaultIndex={0}>
            {this.renderSwiperHtml()}
          </Swiper>
        </section>
        {this.props.from !== 'home' && <div className='arrow-left' onClick={this.goToBack} />}
      </div>
    );
  }
}

export default DetailSwiper;
