import { Link, history } from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
export async function getInitialState(){
  return {
    settings: defaultSettings,
  };
}
