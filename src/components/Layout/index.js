import React, { Component } from 'react';
import LayoutFooter from '@/components/Footer';
import { Outlet } from 'umi';
import './index.less';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div id='main'>
        <div className='mainbody clearfix'>
          <Outlet />
        </div>
        <LayoutFooter />
      </div>
    );
  }
}

export default Layout;
