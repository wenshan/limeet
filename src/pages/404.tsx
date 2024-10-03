import { Link } from 'umi';
import React from 'react';
import { Dropdown, Navbar, Container, Nav, NavDropdown, Row, Col, Button } from 'react-bootstrap';
import { history } from 'umi';

export default function IndexPage() {
  const backClick = () => {
    history.push('/');
  };
  return (
    <div>
      <div
        status="default"
        style={{
          '--image-height': '150px',
        }}
        description={<span>页面丢失了</span>}
      >
        <Button color="primary" onClick={backClick}>
          返回主页
        </Button>
      </div>
    </div>
  );
}
