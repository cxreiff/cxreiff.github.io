import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import photos from "~/src/features/photos/photos.slice";
import theme from "~/src/features/theme/theme.slice";

const middleware = getDefaultMiddleware();

/* eslint-disable */
/* istanbul ignore next */
if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middleware.push(logger);
}
/* eslint-enable */

const store = configureStore({
  reducer: {
    photos,
    theme,
  },
  middleware,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
