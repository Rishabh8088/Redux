import * as actionType from "./actionType";

export const increment = () => {
  return {
    type: actionType.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionType.DECREMENT
  };
};

export const add_5 = value => {
  return {
    type: actionType.ADD_5,
    value: value
  };
};

export const sub_5 = value => {
  return {
    type: actionType.SUB_5,
    value: value
  };
};
