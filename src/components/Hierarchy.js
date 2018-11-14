import React from "react";

import ButtonLoader from "./ButtonLoader";

class Hierarchy extends React.Component {
  state = {
    loader: false
  };

  addTodo = () => {
    this.setState(prevState => ({ loader: !prevState.loader }));
  };

  render() {
    const { loader } = this.state;
    return (
      <ButtonLoader loader={loader} onClick={this.addTodo}>
        Click Me!
      </ButtonLoader>
    );
  }
}

export default Hierarchy;
