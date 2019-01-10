import { createStore } from "redux";
import orgReducer from "../redusers/OrgReducer";

export const store = createStore(
  orgReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
