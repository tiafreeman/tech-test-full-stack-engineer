import {
  FETCH_CAPSULES_PENDING,
  FETCH_CAPSULES_SUCCESS,
  FETCH_CAPSULES_ERROR,
} from "./capsules.actions";

const INITIAL_STATE = {
  pending: false,
  capsules: [],
  error: null,
};

export default function capsuleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CAPSULES_PENDING:
      return {
        ...state,
        pending: true,
        error: "",
      };
    case FETCH_CAPSULES_SUCCESS:
      return {
        ...state,
        pending: false,
        capsules: action.capsules,
      };
    case FETCH_CAPSULES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
