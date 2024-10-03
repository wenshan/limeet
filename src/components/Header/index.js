import { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import QueryString from 'query-string';
import languageObj from '@/constant/language';
import { setLocale, getAllLocales, getLocale, useSelectedRoutes, useModel, FormattedMessage, history } from 'umi';
import { Dropdown, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import listToTreeSelf from '@/utils/listToTreeSelf';

import './index.less';

const menuInit = [
  {
    name: <FormattedMessage id='common.nav.home' />,
    value: 'home',
    path: '/index.html',
    key: 'home',
    active: true
  },
  {
    name: <FormattedMessage id='common.nav.products' />,
    value: 'product',
    key: 'product'
  },
  {
    name: <FormattedMessage id='common.nav.category.gamesToys' />,
    value: '33381771',
    path: '/product/list.html',
    key: '33381771',
    father_key: 'product'
  },
  {
    name: <FormattedMessage id='common.nav.category.catBed' />,
    value: '12771663',
    path: '/product/list.html',
    key: '12771663',
    father_key: 'product'
  },
  {
    name: <FormattedMessage id='common.nav.category.furniture' />,
    value: '97974047',
    path: '/product/list.html',
    key: '97974047',
    father_key: 'product'
  },
  {
    name: <FormattedMessage id='common.nav.category.foodBox' />,
    value: '18885882',
    path: '/product/list.html',
    key: '18885882',
    father_key: 'product'
  },
  {
    name: <FormattedMessage id='common.nav.category.all' />,
    value: 'all',
    path: '/product/list.html',
    key: 'all',
    father_key: 'product'
  },
  {
    name: <FormattedMessage id='common.nav.brand' />,
    value: 'brand',
    path: '/brand.html',
    key: 'brand'
  },
  {
    name: <FormattedMessage id='common.nav.factory' />,
    value: 'about',
    path: '/about.html',
    key: 'about'
  }
];

function Header(props) {
  const { language, setLanguage } = useModel('common');
  const [ menu, setMenu ] = useState(menuInit);
  console.log('language:', language);
  console.log('menu:', menu);
  const initCurrentSetActive = () => {
    const menuCurrent = [];
    const query = QueryString.parse(window.location.search);
    console.log(query);
    let key = 'home';
    if (query && query.key) {
      key = query.key;
    } else {
      key = 'home';
    }
    menu.forEach((item, idx) => {
      if (item.key === key) {
        menuCurrent.push(Object.assign({}, item, { active: true }));
      } else {
        menuCurrent.push(Object.assign({}, item, { active: false }));
      }
    });
    console.log('menu:', menuCurrent);
    setMenu(menuCurrent);
  };
  useEffect(() => {
    initCurrentSetActive();
  }, []);

  const gotoPage = (path, key) => {
    const objMenu = [];
    if (path && key) {
      menu &&
        menu.forEach((item, idx) => {
          objMenu[item.key] = Object.assign({}, item, { active: false });
        });
      menu &&
        menu.forEach((item, idx) => {
          if (item.key === key) {
            objMenu[item.key] = Object.assign({}, item, { active: true });
            if (item.father_key) {
              objMenu[item.father_key] = Object.assign({}, objMenu[item.father_key], { active: true });
            }
          } else {
            objMenu[item.key] = Object.assign({}, item, { active: false });
          }
        });
      const newMenu = Object.values(objMenu);
      setMenu(newMenu);
      history.push(`${path}?key=${key}`);
    }
  };

  const menuNav = () => {
    const html = [];
    const { rowsTree } = listToTreeSelf(menu);
    rowsTree &&
      rowsTree.map((item, idx) => {
        if (item.children && item.children.length > 0) {
          const htmlDropdown = [];
          item.children.map((list, indx) => {
            if (list.active) {
              htmlDropdown.push(
                <NavDropdown.Item key={list.key} onClick={() => gotoPage(list.path, list.key)} active>
                  {list.name}
                </NavDropdown.Item>
              );
            } else {
              htmlDropdown.push(
                <NavDropdown.Item key={list.key} onClick={() => gotoPage(list.path, list.key)}>
                  {list.name}
                </NavDropdown.Item>
              );
            }
          });
          if (item.active) {
            html.push(
              <NavDropdown title={item.name} id='basic-nav-dropdown' active>
                {htmlDropdown}
              </NavDropdown>
            );
          } else {
            html.push(
              <NavDropdown title={item.name} id='basic-nav-dropdown'>
                {htmlDropdown}
              </NavDropdown>
            );
          }
        } else {
          if (item.active) {
            html.push(
              <Nav.Link key={item.key} onClick={() => gotoPage(item.path, item.key)} active>
                {item.name}
              </Nav.Link>
            );
          } else {
            html.push(
              <Nav.Link key={item.key} onClick={() => gotoPage(item.path, item.key)}>
                {item.name}
              </Nav.Link>
            );
          }
        }
      });
    return html;
  };
  const popupColumns = () => {
    const html = [];
    const data = Object.values(languageObj);
    data.map((item, idx) => {
      html.push(
        <Dropdown.Item onClick={() => popupSelectValue(item.value)} eventKey={item.value}>
          {item.label}
        </Dropdown.Item>
      );
    });
    return <ul className='lan-list'>{html}</ul>;
  };
  const languageCurrent = () => {
    if (language) {
      return languageObj[language].label;
    }
  };
  const popupSelectValue = (value) => {
    setLanguage(value);
    Cookie.set('lang', value);
    setLocale(value, true);
  };

  return (
    <Container fluid>
      <div className='header-warp clearfix'>
        <div className='mask' />
        <div className='header'>
          <div className='main'>
            <div className='logo'>
              <img src='https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/limeet_logo.png' />
            </div>
            <div className='des'>
              <h1>Limeet</h1>
              <h2>
                <FormattedMessage id='common.header.name.second' />
                <img src='https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/maogou.png' />
              </h2>
              <p className='clearfix'>
                <img src='https://affiliate-traffic.oss-cn-hongkong.aliyuncs.com/limeet/xin.png' />
                <FormattedMessage id='common.header.name.des' />
              </p>
            </div>
          </div>
          <div className='locale'>
            <Dropdown>
              <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
                {languageCurrent()}
              </Dropdown.Toggle>
              <Dropdown.Menu>{popupColumns()}</Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className='nav-sub'>
          <div className='mask-sub' />
          <Navbar expand='sm'>
            <Navbar.Brand />
            <Navbar.Toggle aria-controls='basic-navbar-nav' sm />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>{menuNav()}</Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </Container>
  );
}

export default Header;
