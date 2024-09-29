import React, { Component } from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import { FormattedMessage } from 'umi';
import './index.less';

function Title(props) {
  return (
    <div className='title-wrap clearfix'>
      <div className='title'>
        <i className='left-icon' />
        <h3>
          <FormattedMessage id={props.title} />
        </h3>
        <i className='right-icon' />
      </div>
    </div>
  );
}

export default Title;
