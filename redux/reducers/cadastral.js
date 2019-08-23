import * as Types from "../actions/types";

const INITIAL_STATE = {
  data: []
};

const CadastralData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.FETCH_DATA_SUCCESS:
      return { ...state, data: action.data };

    case Types.FETCH_DATA_ERROR:
      return { ...state, data: [], error: action.error };

    default:
      return state;
  }
};

export default CadastralData;
