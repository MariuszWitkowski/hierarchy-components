import { decorate, observable, action } from "mobx";

export class Store {
  loader = false;

  setLoader = value => {
    this.loader = value;
  };

  addTodo = () => {
    this.setLoader(!this.loader);
  };
}

const store = new Store();

decorate(store, {
  loader: observable,
  setLoader: action,
  addTodo: action
});

export default store;
