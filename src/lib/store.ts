import { configureStore } from "@reduxjs/toolkit";
import installSlice from "./feat/installSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      install: installSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
