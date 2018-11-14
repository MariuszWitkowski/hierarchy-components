import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import ButtonLoader from "../../common/ButtonLoader";
import { StoreProvider, StoreConsumer } from "./StoreProvider";

class Hierarchy extends React.Component {
  render() {
    return (
      <StoreProvider>
        <Card>
          <CardContent>TODO:</CardContent>
          <CardActions>
            <StoreConsumer>
              {({ loader, addTodo }) => (
                <ButtonLoader loader={loader} onClick={addTodo}>
                  Click Me!
                </ButtonLoader>
              )}
            </StoreConsumer>
          </CardActions>
        </Card>
      </StoreProvider>
    );
  }
}

export default Hierarchy;
