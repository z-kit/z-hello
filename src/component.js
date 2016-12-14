/**
 * Copyright (c) 2016 z-kit contributors.
 * @license MIT LICENSE
 * https://github.com/z-kit/z-hello
 */

import styles from './style.css';

// Global to local style mappings, works even if using CSS modules
const classnames = {
  component: styles['z-hello'] || 'z-hello',
  title: styles['z-hello__title'] || 'z-hello__title',
};

export function component(e) {
  return ({ children }) => {
    const title = e('h1', { className: classnames.title }, children);
    return e('div', { className: classnames.component }, title);
  };
}

export default component;
