'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.component = component;

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Global to local style mappings, works even if using CSS modules
var classnames = {
  component: _style2.default['z-component'] || 'z-component',
  title: _style2.default['z-component__title'] || 'z-component__title'
}; /**
    * Copyright (c) 2016 z-kit contributors.
    * @license MIT LICENSE
    * https://github.com/z-kit/z-component
    */

function component(e) {
  return function (_ref) {
    var children = _ref.children;

    var title = e('h1', { className: classnames.title }, children);
    return e('div', { className: classnames.component }, title);
  };
}

exports.default = component;
