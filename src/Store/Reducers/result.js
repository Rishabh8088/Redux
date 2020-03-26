import * as actionTypes from "../Actions/actionType";
import { updateObject } from "../utility";

const intialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updateArray = state.results.filter(
    result => result.id !== action.resultElementId
  );

  return updateObject(state, { results: updateArray });
};

const result = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      // Using utility method
      return updateObject(state, {
        results: state.results.concat({ id: new Date(), value: action.result })
      });

    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
  }
  return state;
};

export default result;
