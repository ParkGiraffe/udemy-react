import React, { Component } from "react";

class ErrorBound extends Component {
  constructor() {
    super();
    this.state({
      hasError: false,
    });
  }

  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}
