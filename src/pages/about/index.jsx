import React, { Component } from 'react';
import { connect, history } from 'umi';
import { FormattedMessage } from 'umi';
import Header from '@/components/Header';
import ICP from '@/components/Icp';


import './index.less';

@connect((state) => ({
  image_link: state.detail.image_link,
  additional_image_link: state.detail.additional_image_link,
  product_detail: state.detail.product_detail,
  currentPath: state.common.currentPath,
}))
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wechatStatus: false,
    };
  }
  gotoPage = (val) => {
    if (val){
      history.push(val);
    }
  };

  handleWechat = () => {
    const { wechatStatus } = this.state;
    this.setState({
      wechatStatus: !wechatStatus,
    });
  };

  handleWechatStatus= () => {
    this.setState({
      wechatStatus: false,
    });
  };

  handelNavigationHeader = (val) => {
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
  handelGoBack = () => {
    this.props.dispatch({
      type: 'common/update',
      payload: {
        currentPath: '/index.html',
      }
    });
    history.push('/index.html');
  }
  componentDidMount() {

  }

  render() {
    const { wechatStatus } = this.state;
    return (
      <div className="page clearfix">
        <div className="about-page clearfix">
          <Header navigationCallback={this.handelNavigationHeader} currentPath={this.props.currentPath} goBackCallback={this.handelGoBack} from="about"></Header>
          <div className="des-tx clearfix">
            <h1><FormattedMessage id="common.about.name" /></h1>
            <p><FormattedMessage id="common.about.tip" /></p>
            <img src="https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/factory.png"></img>
            <p>
              <img src="https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/jiaozhang.png"/> <FormattedMessage id='common.about.des' />
            </p>
          </div>
          <div className='company clearfix'>
            <h1>Shanghai Erka International Trade Co., Ltd</h1>
            <ul>
              <li><span>Address: </span>2nd Floor, 1270 Luofen Road, Baoshan District, Shanghai, China</li>
              <li><span>Email: </span><a href="mailto:hangzhououhao@limeet.com">hangzhououhao@limeet.com</a></li>
            </ul>
          </div>
          <div className='contact clearfix'>
            <div className='youtube'><a href="https://www.youtube.com/channel/UCoIs9wNHv3RFkB5Wm6KEHCA"><img src="https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/youtube-filled.png" /></a></div>
            <div className='wechat' onClick={this.handleWechat}><img src="https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/wechat-filled.png" /></div>
            <div className={wechatStatus ? 'mask-model action' : 'mask-model'} onClick={this.handleWechatStatus}>
              <img src="https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/wechat.png" />
              <div className='close' onClick={this.handleWechatStatus}>x</div>
            </div>
          </div>
        </div>
        <ICP></ICP>
      </div>
    );
  }
}

export default About;
