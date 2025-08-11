import { Dropdown, Navbar, Container, Nav, NavDropdown, Row, Col, Modal, Button, Image } from 'react-bootstrap';
import { useModel, history, FormattedMessage, Link } from 'umi';
import { useEffect, useState } from 'react';

import './index.less';

function Layout() {
  const { categories, setCategories, product_type_id, setProductTypeId } = useModel('categories');
  const [wechatStatus, setWechatStatus] = useState(false);
  const handleClose = () => setWechatStatus(false);
  const handleShow = () => setWechatStatus(true);
  const renderHtml = (props) => {
    const html = [];
    categories &&
      categories.length &&
      categories.map((item) => {
        if (item && item.active) {
          html.push(
            <Nav.Link
              key={item.key}
              href={`/product/list.html?id=${item.key}`}
              onClick={() => setCurrentCategoriesHandler(item.key)}
              active
            >
              {item.title}
            </Nav.Link>
          );
        } else {
          html.push(
            <Nav.Link
              key={item.key}
              href={`/product/list.html?id=${item.key}`}
              onClick={() => setCurrentCategoriesHandler(item.key)}
            >
              {item.title}
            </Nav.Link>
          );
        }
      });
    return html;
  };
  return (
    <Container className='footer' fluid>
      <Row>
        <Col sm>
          <h3 className='title'>
            <FormattedMessage id='footer.product.we' />
          </h3>
          <ul className='list'>
            <li>
              <Link to='/brand.html?key=brand'>
                <FormattedMessage id='footer.product.brand.title' />
              </Link>
            </li>
            <li>
              <Link to='/about.html?key=about'>
                <FormattedMessage id='footer.product.factory.title' />
              </Link>
            </li>
            <li>
              <Link to='/product/list.html?id=all'>
                <FormattedMessage id='footer.product.factory.product' />
              </Link>
            </li>
          </ul>
        </Col>
        <Col sm>
          <h3 className='title'>
            <FormattedMessage id='footer.product.category.title' />
          </h3>
          <Nav className='flex-column'>{renderHtml()}</Nav>
        </Col>
        <Col sm>
          <h3 className='title'>
            <FormattedMessage id='footer.product.contact' />
          </h3>
          <div className='company clearfix'>
            <ul className='list'>
              <li>
                <span>
                  <FormattedMessage id='footer.product.factory.address' />：
                </span>2nd Floor, 1270 Luofen Road, Baoshan District, Shanghai, China
              </li>
              <li>
                <span>Email：</span>
                <a href='mailto:hou_ve@qq.com'>hou_ve@qq.com</a>
              </li>
              <li className='wrap-box'>
                <span className='youtube'><a target='_blank' href="https://www.youtube.com/channel/UCoIs9wNHv3RFkB5Wm6KEHCA"><img src="https://img.limeetpet.com/limeet/icon/icons8-youtube-240.png" /></a></span>
                <span className='facebook'><a target='_blank' href="https://www.facebook.com/limeet.366183"><img src="https://img.limeetpet.com/limeet/icon/icons8-facebook-240.png" /></a></span>
                <span className='wechat' onClick={handleShow}><img src="https://img.limeetpet.com/limeet/icon/icons8-whatsapp-240.png" /></span>
              </li>
            </ul>
          </div>
          <Modal show={wechatStatus} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image thumbnail src="https://img.limeetpet.com/limeet/icon/whatApp.png"></Image>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
