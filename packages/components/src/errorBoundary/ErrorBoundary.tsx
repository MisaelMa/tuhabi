import { Children, Component, ReactNode } from 'react';

import { ErrorBoundaryProps, ErrorBoundaryState } from './IErrorBoundary';

/**
 * Error class for catch and report UI errors
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  /**
   * Register component initial error state
   *
   * @param props - react component props.
   */
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  /**
   * Change the error state of the ErrorBoundary component
   */
  static getDerivedStateFromError(): ErrorBoundaryState {
    return {
      hasError: true,
    };
  }

  /**
   * Catch errors during rendering
   *
   * @param error - Error exception instance
   */
  componentDidCatch(error: Error): void {
    // eslint-disable-next-line no-console
    console.error(error, `[ErrorBoundary] ${this.formatChildrenNames()}`);
  }

  /**
   * Get react children component name and format it
   */
  private formatChildrenNames(): string {
    const { children } = this.props;

    return (
      Children.map(
        children,
        child =>
          (
            (child as React.ReactElement)
              ?.type as React.JSXElementConstructor<unknown>
          )?.name
      )?.join(',') || 'Unknown'
    );
  }

  /**
   * render
   */
  render(): ReactNode {
    const { hasError } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      return fallback;
    }

    return children;
  }
}

export default ErrorBoundary;
