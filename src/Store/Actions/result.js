import * as actionType from "./actionType";

export const saveResult = res => {
  // actions should be in action dispatch
  // const updatedResult = res * 2;
  return {
    type: actionType.STORE_RESULT,
    result: res
  };
};

export const storeResult = res => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().counter;
      console.log("=====" + oldCounter.counter);
      dispatch(saveResult(res));
    }, 2000);
  };
};

export const deleteResult = res => {
  return {
    type: actionType.DELETE_RESULT,
    resultElementId: res
  };
};
