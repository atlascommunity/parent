import React from 'react';
import ReactDOM from 'react-dom';
import { Applictaion } from './views/Application';
import { configure } from 'mobx';
import { AppStore } from './stores/AppStore';

export function init() {
  configure({ enforceActions: 'observed' });
  const root = document.getElementById('standarts-root-container');

  if (root !== null) {
    const rootStore = new AppStore();
    ReactDOM.render(<Applictaion store={rootStore} />, root);
  }
}
