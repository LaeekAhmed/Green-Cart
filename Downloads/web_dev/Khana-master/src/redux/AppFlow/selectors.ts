import { AppState } from "../reduxStore";

export const getAppFlow = (state: AppState) => {
    return state.appFlow;
}
