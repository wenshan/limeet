/* eslint-disable no-undef */
import QueryString from 'query-string';
import Cookie from 'js-cookie';
import { useEffect, useState } from 'react';
import { setLocale, getAllLocales, getLocale } from 'umi';
import { useModel, history } from 'umi';

function Common() {
  const projectId = '1747727677';
  const [ lang, setLang ] = useState('en-US');
  const [ currentPath, setCurrentPath ] = useState('index.html');
  const getUrlLang = async () => {
    const query = QueryString.parse(window.location.search);
    const lang = query.lang || Cookie.get('lang') || 'en-US';
    if (lang) {
      setLang(lang);
      setLocale(lang, false);
      Cookie.set('lang', lang);
    }
  };
  useEffect(() => {
    getUrlLang();
  }, []);
  return {
    language: lang,
    projectId,
    currentPath,
    setCurrentPath
  };
}
export default Common;
