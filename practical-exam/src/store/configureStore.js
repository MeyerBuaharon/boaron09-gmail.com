import { createStore, combineReducers } from "redux";
import playlistReducer from "../reducers/playlistReducer";

export default () => {
  const store = createStore(
    combineReducers({
      playlists: playlistReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
