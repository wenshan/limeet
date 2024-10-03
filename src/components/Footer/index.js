import { Dropdown, Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { useModel, history, FormattedMessage, Link } from 'umi';

import './index.less';

function Layout() {
  const { categories, setCategories, product_type_id, setProductTypeId } = useModel('categories');
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
        <Col>
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
        <Col>
          <h3 className='title'>
            <FormattedMessage id='footer.product.category.title' />
          </h3>
          <Nav className='flex-column'>{renderHtml()}</Nav>
        </Col>
        <Col>
          <h3 className='title'>
            <FormattedMessage id='footer.product.contact' />
          </h3>
          <div className='company clearfix'>
            <ul className='list'>
              <li>
                <span>Address: </span>2nd Floor, 1270 Luofen Road, Baoshan District, Shanghai, China
              </li>
              <li>
                <span>Email: </span>
                <a href='mailto:hangzhououhao@limeet.com'>hangzhououhao@limeet.com</a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
