import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  AnyAction,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import appReducer from "./slice";

export const rootReducer = combineReducers({
  reducer: appReducer,
});

const reducer = (state: ReturnType<typeof rootReducer>, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: reducer as never,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];
type AppStoreGetState = AppStore["getState"];
export type RootState = ReturnType<AppStoreGetState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<AppStore>(makeStore);
