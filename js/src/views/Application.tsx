import React from 'react';
import { AppStore } from '../stores/AppStore';
import { observer } from 'mobx-react';

type ApplicationProps = {
  store: AppStore;
};

export const Applictaion = observer((props: ApplicationProps) => {
  return (
    <div>
      <h2>App component view here =)</h2>
      <div>
        <button onClick={() => props.store.incrementCounter()}>Counter = {props.store.counter}</button>
      </div>
    </div>
  );
});
