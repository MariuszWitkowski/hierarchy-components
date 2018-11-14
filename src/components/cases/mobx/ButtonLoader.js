import React from "react";
import { inject, observer } from "mobx-react";

import ButtonLoader from "../../common/ButtonLoader";

const ObservedButton = inject(({ store }) => ({
  loader: store.loader,
  onClick: store.addTodo
}))(observer(ButtonLoader));

export default ObservedButton;
