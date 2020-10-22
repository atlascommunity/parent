import { action, makeObservable, observable } from 'mobx';

export class AppStore {
  constructor() {
    makeObservable(this);
  }

  @observable
  counter = 0;

  @action('incrementCounter')
  incrementCounter = () => {
    this.counter++;
  };
}
