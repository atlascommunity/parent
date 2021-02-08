import { action, makeObservable, observable } from 'mobx';

export class AppStore {
  @observable
  counter = 0;

  constructor() {
    makeObservable(this);
  }

  @action('incrementCounter')
  incrementCounter = () => {
    this.counter++;
  };
}
