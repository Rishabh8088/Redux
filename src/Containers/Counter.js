import React, { Component } from "react";

import { connect } from "react-redux";

import CounterOutput from "../Components/CounterOutput/CounterOutput";
import CounterControl from "../Components/CounterControl/CounterControl";

import * as actionCreator from "../Store/Actions/index";

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
    onIncrementCounter: () => dispatch(actionCreator.increment()),
    onDecrementCounter: () => dispatch(actionCreator.decrement()),
    onAddCounter: () => dispatch(actionCreator.add_5(5)),
    onSubCounter: () => dispatch(actionCreator.sub_5(5)),
    onStoreResult: result => dispatch(actionCreator.storeResult(result)),
    onDeleteResult: id => dispatch(actionCreator.deleteResult(id))
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(Counter);
