import React, {Component} from "react";
import {useHistory} from 'react-router-dom';

import Button from "./components/Button";

/**
 * Simple Error Handler
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError() {
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    console.error(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (<div>
        <h1>Something went wrong.</h1>
        <Button
          onClick={() => {
            const history = useHistory();
            history.push('/');
            this.setState({
              hasError: false,
            })
          }}>
          Go Home Page
        </Button>
      </div>);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
