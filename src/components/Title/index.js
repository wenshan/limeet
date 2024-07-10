import React, { Component } from 'react';
import './index.less';

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
  }

  componentDidMount() {}

  render() {
    if (!this.props.title) return;
    return (
      <div className='title-wrap clearfix'>
        <div className='title'>
          <i className='left-icon' />
          <h3>{this.props.title}</h3>
          <i className='right-icon' />
        </div>
      </div>
    );
  }
}

export default Title;
