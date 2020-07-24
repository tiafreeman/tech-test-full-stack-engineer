export const FETCH_CAPSULES_PENDING = "FETCH_CAPSULES_PENDING";
export const FETCH_CAPSULES_SUCCESS = "FETCH_CAPSULES_SUCCESS";
export const FETCH_CAPSULES_ERROR = "FETCH_CAPSULES_ERROR";

export const loadCapsules = () => (dispatch) => {
  dispatch({ type: FETCH_CAPSULES_PENDING });
  fetch("http://localhost:4000/capsules")
    .then((response) => response.json())
    .then(
      (capsules) => dispatch({ type: FETCH_CAPSULES_SUCCESS, capsules }),
      (error) =>
        dispatch({
          type: FETCH_CAPSULES_ERROR,
          error: error.message || "Unexpected Error!!!",
        })
    );
};
