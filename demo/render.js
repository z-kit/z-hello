import { h, render as pRender } from 'preact';
import React from 'react';
import { render as rRender } from 'react-dom';
import component from '../dist/module';

const PreactComponent = component(h);
const ReactComponent = component(React.createElement);

const preactContainer = document.querySelector('.preact-container');
const reactContainer = document.querySelector('.react-container');

// Rendering with preact
pRender(h(PreactComponent, {}, 'Hello World!'), preactContainer);

// Rendering with React
rRender(React.createElement(ReactComponent, {}, 'Hello World!'), reactContainer);
