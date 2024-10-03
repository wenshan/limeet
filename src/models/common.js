/* eslint-disable no-undef */
import QueryString from 'query-string';
import Cookie from 'js-cookie';
import { useEffect, useState } from 'react';
import { setLocale, getAllLocales, getLocale, useModel, history } from 'umi';

function Common() {
  const projectId = '1747727677';
  const [ language, setLanguage ] = useState('');
  const [ currentPath, setCurrentPath ] = useState('index.html');
  const getUrlLang = async () => {
    const query = QueryString.parse(window.location.search);
    const lang = query.lang || Cookie.get('lang') || getLocale() || 'en-US';
    if (lang) {
      setLanguage(lang);
      setLocale(lang, false);
      Cookie.set('lang', lang);
    }
  };
  useEffect(() => {
    getUrlLang();
  }, []);
  return {
    language,
    setLanguage,
    projectId,
    currentPath,
    setCurrentPath
  };
}
export default Common;
