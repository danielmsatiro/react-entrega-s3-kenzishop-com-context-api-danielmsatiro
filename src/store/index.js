import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./modules/rootReducer";

export const store = createStore(rootReducer, applyMiddleware(thunk));
