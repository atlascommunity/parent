import React from 'react';
import { CacheProvider } from '@emotion/core';
import { EmotionCache } from '@emotion/cache';
import { observer } from 'mobx-react';
import { AppStore } from '../stores/AppStore';

type ApplicationProps = {
  store: AppStore;
  styleCache: EmotionCache;
};

export const Application = observer(({ styleCache, store }: ApplicationProps) => {
  return (
    <CacheProvider value={styleCache}>
      <div>
        <h2>App component view here =)</h2>
        <div>
          <button onClick={() => store.incrementCounter()}>Counter = {store.counter}</button>
        </div>
      </div>
    </CacheProvider>
  );
});
