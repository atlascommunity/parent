import React from 'react';
import ReactDOM from 'react-dom';
import createCache from '@emotion/cache';
import { configure } from 'mobx';
import { Application } from './views/Application';
import { AppStore } from './stores/AppStore';

export function init(): void {
  configure({ enforceActions: 'observed' });
  const root = document.getElementById('standarts-root-container');

  if (root !== null) {
    const rootStore = new AppStore();
    const ganttStyleCache = createCache({
      key: 'gantt-styles',
    });
    ReactDOM.render(<Application store={rootStore} styleCache={ganttStyleCache} />, root);
  }
}
