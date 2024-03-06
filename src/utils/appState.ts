
import { AppState, appStateAction } from "./types";

export const initialAppState: AppState = {
    collapseExpanded:false,
}

export function appReducer(state: AppState, action: appStateAction): AppState {
    switch (action.type) {

        case 'setCollapseExpanded': {
            const newState: AppState = { ...state, collapseExpanded: action.value };
            return newState;
        }
        default:
            return state;
    }
}