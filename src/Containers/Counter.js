import React, { Component } from "react";

import { connect } from "react-redux";

import CounterOutput from "../Components/CounterOutput/CounterOutput";
import CounterControl from "../Components/CounterControl/CounterControl";

import * as actionTypes from "../Store/action";

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangeHandler = (action, value) => {
    switch (action) {
      case "Inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;

      case "Dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "Add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "Sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr}></CounterOutput>

        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        ></CounterControl>
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        ></CounterControl>
        <CounterControl
          label="Add 5"
          clicked={this.props.onAddCounter}
        ></CounterControl>
        <CounterControl
          label="Substract 5"
          clicked={this.props.onSubCounter}
        ></CounterControl>
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.storeResults.map(storeResult => (
            <li
              key={storeResult.id}
              onClick={() => this.props.onDeleteResult(storeResult.id)}
            >
              {storeResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter.counter,
    storeResults: state.result.results
  };
};

const dispatchStateToProps = dispatch => {
  return {
    onIncrementCounter: () =>
      dispatch({
        type: actionTypes.INCREMENT
      }),
    onDecrementCounter: () =>
      dispatch({
        type: actionTypes.DECREMENT
      }),
    onAddCounter: () =>
      dispatch({
        type: actionTypes.ADD_5,
        value: 5
      }),
    onSubCounter: () =>
      dispatch({
        type: actionTypes.SUB_5,
        value: 5
      }),
    onStoreResult: result =>
      dispatch({
        type: actionTypes.STORE_RESULT,
        result: result
      }),
    onDeleteResult: id =>
      dispatch({
        type: actionTypes.DELETE_RESULT,
        resultElementId: id
      })
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(Counter);
