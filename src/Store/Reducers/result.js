import * as actionTypes from "../action";

const intialState = {
  results: []
};

const result = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      };
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);

      const updateArray = state.results.filter(
        result => result.id !== action.resultElementId
      );

      return {
        ...state,
        results: updateArray
        // results: newArray
      };
  }
  return state;
};

export default result;
