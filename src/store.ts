import { configureStore } from "@reduxjs/toolkit";
import bottomSideSectionReducer from "@/Features/bottombar/store/bottomSideSectionSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      bottomSideSection: bottomSideSectionReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
