import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/store";
import { RightDock } from "@/Features/bottombar/models/bottomBarModel";
interface BottomSideSectionState {
  shouldShowSideSection: boolean;
  selectedName: RightDock;
}
const initialState: BottomSideSectionState = {
  shouldShowSideSection: true,
  selectedName: RightDock.NONE,
};
const bottomSideSectionReducer = createSlice({
  name: "bottomSideSection",
  initialState,
  reducers: {
    toggleShowSideSection: (state) => {
      state.shouldShowSideSection = !state.shouldShowSideSection;
    },
    changeSelectionAndToogle: (state, { payload }) => {
      if (state.selectedName == payload) {
        state.selectedName = RightDock.NONE;
        state.shouldShowSideSection = false;
      } else {
        state.selectedName = payload;
        state.shouldShowSideSection = true;
      }
    },
  },
});

export const getShouldShowSideSection = (state: RootState) => {
  return state.bottomSideSection.shouldShowSideSection;
};

export const getSelectedName = (state: RootState) => {
  return state.bottomSideSection.selectedName;
};

export const { toggleShowSideSection, changeSelectionAndToogle } =
  bottomSideSectionReducer.actions;

export default bottomSideSectionReducer.reducer;
