import * as actionTypes from "../action";

const intialState = {
  counter: 0
};

const counter = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // Point 1 and 2 are same
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;

    case actionTypes.DECREMENT:
      // Point 1 and 2 are same
      return {
        ...state,
        counter: state.counter - 1
      };

    case actionTypes.ADD_5:
      return {
        ...state,
        counter: state.counter + action.value
      };

    case actionTypes.SUB_5:
      return {
        ...state,
        counter: state.counter - action.value
      };
  }
  return state;
};

export default counter;
