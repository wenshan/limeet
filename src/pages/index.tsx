import styles from './index.less';

import { Button, Empty } from 'antd-mobile';
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
