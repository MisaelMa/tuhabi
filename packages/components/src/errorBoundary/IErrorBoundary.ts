import React from 'react';

/**
 * Define IErrorBoundary Component props
 */
export interface ErrorBoundaryState {
  hasError: boolean;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: JSX.Element;
}
