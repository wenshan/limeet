import styles from './index.less';
import { Dropdown, Navbar, Container, Nav, NavDropdown, Row, Col, Button } from 'react-bootstrap';
import { Link, history } from 'umi';
import moment from 'moment';

export default function IndexPage() {
  return (
    <div>
      <Link to="/list">Go to list page</Link>
      {moment().format('YYYY年MM月DD日 hh:mm:ss')}
    </div>
  );
}
