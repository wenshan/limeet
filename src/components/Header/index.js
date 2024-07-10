import React, { Component } from 'react';
import { Button, Popup } from 'antd-mobile';
import Cookie from 'js-cookie';
import languageObj from '@/constant/language';
import { setLocale, getAllLocales, getLocale } from 'umi';
import './index.less';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAction: 'Home',
      popupVisible: false,
      language: getLocale(),
      menu: [
        {
          name: 'Home',
          value: 'home',
          path: '/index.html'
        },
        {
          name: 'Products',
          value: 'product',
          path: '/product.html'
        },
        {
          name: 'Factory',
          value: 'about',
          path: '/about.html'
        }
      ]
    };
  }

  goToBack = () => {
    if (this.props.goBackCallback) {
      this.props.goBackCallback();
    }
  };

  gotoPage = (val) => {
    if (val && this.props.navigationCallback) {
      this.props.navigationCallback(val);
    }
  };

  menuNav = () => {
    const html = [];
    const { menu } = this.state;
    const { currentPath } = this.props;
    menu.map((item, idx) => {
      if (currentPath === item.path) {
        html.push(
          <li key={idx} onClick={() => this.gotoPage(item.path)} className='action'>
            {item.name}
          </li>
        );
      } else {
        html.push(
          <li key={idx} onClick={() => this.gotoPage(item.path)}>
            {item.name}
          </li>
        );
      }
    });
    return html;
  };
  popupColumns = () => {
    const html = [];
    const data = Object.values(languageObj);
    data.map((item, idx) => {
      html.push(<li onClick={() => this.popupSelectValue(item.value)}>{item.label}</li>);
    });
    return <ul className='lan-list'>{html}</ul>;
  };
  languageCurrent = () => {
    const { language } = this.state;
    return languageObj[language].label;
  };
  popupButtonShow = () => {
    this.setState({
      popupVisible: true
    });
  };
  popupButtonClose = () => {
    this.setState({
      popupVisible: false
    });
  };
  popupSelectValue = (value) => {
    this.setState({
      language: value,
      popupVisible: false
    });
    Cookie.set('lang', value);
    setLocale(value, true);
  };
  componentDidMount() {}

  render() {
    return (
      <div className='header-warp clearfix'>
        <div className='mask' />
        <div className='header'>
          {this.props.from !== 'home' && <div className='arrow-left' onClick={this.goToBack} />}
          <div className='main'>
            <div className='logo'>
              <img src='https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeetpet/limeet_logo.png' />
            </div>
            <div className='des'>
              <h1>LimeetPet</h1>
              <h2>Creating a Warm Home for Pets.</h2>
              <p>We design many creative cat furniture items, allowing cats and people to coexist warmly.</p>
            </div>
          </div>
        </div>
        <div className='locale'>
          <Button onClick={this.popupButtonShow}>{this.languageCurrent()}</Button>
        </div>
        <div className='nav'>
          <div className='mask-sub' />
          <ul>{this.menuNav()}</ul>
        </div>
        <Popup
          visible={this.state.popupVisible}
          onMaskClick={this.popupButtonClose}
          value={this.state.language}
          onConfirm={this.popupSelectValue}
        >
          {this.popupColumns()}
        </Popup>
      </div>
    );
  }
}

export default Header;
