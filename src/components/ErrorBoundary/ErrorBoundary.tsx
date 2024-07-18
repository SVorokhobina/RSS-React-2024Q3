import "./ErrorBoundary.css";
import { Component } from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "../../types";

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = {
    isErrorCaught: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { isErrorCaught: true };
  }

  render() {
    if (this.state.isErrorCaught) {
      return (
        <div className="error-boundary-message">
          Error Boundary test error is caught.
          <br />
          Please, reload the page.
        </div>
      );
    }
    return this.props.children;
  }
}
