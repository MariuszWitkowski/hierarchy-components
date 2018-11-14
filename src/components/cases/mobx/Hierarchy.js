import React from "react";
import { Provider } from "mobx-react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import ButtonLoader from "./ButtonLoader";
import Store from "./store";

class Hierarchy extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Card>
          <CardContent>TODO: Mobx</CardContent>
          <CardActions>
            <ButtonLoader>Click Me!</ButtonLoader>
          </CardActions>
        </Card>
      </Provider>
    );
  }
}

export default Hierarchy;
