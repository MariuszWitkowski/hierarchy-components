import React from "react";

const initStore = {
  loading: false,
  setLoader: () => {},
  addTodo: () => {}
};

const StoreContext = React.createContext(initStore);
const StoreConsumer = StoreContext.Consumer;

class StoreProvider extends React.Component {
  state = {
    loader: false
  };

  setLoader = value => {
    this.setState({ loader: value });
  };

  addTodo = () => {
    this.setLoader(!this.state.loader);
  };

  // TODO: Czy nie lepiej trzymać w state?
  get contextValue() {
    return {
      ...this.state,
      addTodo: this.addTodo
    };
  }

  render() {
    return (
      <StoreContext.Provider value={this.contextValue}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

export { StoreContext, StoreConsumer, StoreProvider };
