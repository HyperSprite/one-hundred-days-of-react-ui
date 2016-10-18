// @flow
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './App.css';
import Modal from './components/modal';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      mounted: true,
    });
  }

  onFormSubmit(e) {
    this.setState({
      mounted: false,
    });
    e.preventDefault();
  }

  render() {
    let child;

    if (this.state.mounted) {
      child = (<Modal onSubmit={this.onFormSubmit} />);
    }

    return (
      <div className="App">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {child}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
