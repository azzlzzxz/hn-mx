/*
 * @Author: xinxu
 * @Date: 2023-07-06 09:41:14
 * @LastEditors: xinxu
 * @LastEditTime: 2023-07-06 18:09:07
 * @FilePath: /chatgpt-next/app/hooks/useDarkMode.ts
 */
import { useEffect } from 'react';

export const useDarkMode = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // 暗色模式
      link.href = '/prism-dark.css';
    } else {
      // 浅色模式
      link.href = '/prism-light.css';
    }
    document.head.appendChild(link);

    let darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeQuery.addEventListener('change', (e) => {
      if (e.matches) {
        // 暗色模式
        link.href = '/prism-dark.css';
      } else {
        // 浅色模式
        link.href = '/prism-light.css';
      }
    });
  }, []);
};
