import rootReducer from "./reducers/rootReducer";
import { persistStore } from "redux-persist";
import { createStore } from "redux";

const reduxStore = () => {
  const store = createStore(rootReducer); //Có middleware ở đây

  const persistor = persistStore(store); //

  return { store, persistor };
};

export default reduxStore;
