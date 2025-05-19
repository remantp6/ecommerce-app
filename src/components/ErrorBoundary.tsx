import { Component, ReactNode } from 'react';

// define the props for the ErrorBoundary component
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

// define the state for the ErrorBoundary component
interface ErrorBoundaryState {
  hasError: boolean;
}

// ErrorBoundary component
// This component is used to catch JavaScript errors in the child component tree
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    // constructor to initialize the state. Initially, no error
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // static method to catch errors in the child component tree
  // react calls this method automatically when an error is thrown in a child component
  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

//  use to add some extra logic, fo eg, to log the error to an error reporting service
// componentDidCatch(error, info) {} 

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <h2>Oops! Something went wrong.</h2>;
    }
    return this.props.children;
  }
}
