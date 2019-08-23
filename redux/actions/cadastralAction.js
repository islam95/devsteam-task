import * as Types from "./types";
import * as api from "../../helpers/api";

export const fetchData = () => {
  return async dispatch => {
    dispatch({ type: Types.FETCH_DATA });
    try {
      const data = await api.getCnaps();
      dispatch({
        type: Types.FETCH_DATA_SUCCESS,
        data
      });
    } catch (err) {
      dispatch({
        type: Types.FETCH_DATA_ERROR,
        error: err
      });
    }
  };
};
