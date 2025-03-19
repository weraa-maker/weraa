'use client';

import { Suspense, ReactNode, useCallback, useState } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="rounded-md border border-red-500 bg-red-50 p-4 dark:bg-red-900/20">
      <div className="flex flex-col space-y-2">
        <h2 className="text-lg font-semibold text-red-800 dark:text-red-200">Something went wrong</h2>
        <p className="text-sm text-red-700 dark:text-red-300">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="mt-2 w-fit rounded-md bg-red-100 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-200 dark:bg-red-800 dark:text-red-100 dark:hover:bg-red-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

interface LoadingFallbackProps {
  message?: string;
}

function LoadingFallback({ message = 'Loading...' }: LoadingFallbackProps) {
  return (
    <div className="flex h-20 w-full items-center justify-center">
      <div className="flex flex-col items-center space-y-2">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{message}</p>
      </div>
    </div>
  );
}

interface AsyncBoundaryProps {
  children: ReactNode;
  loadingFallback?: ReactNode;
  errorFallback?: (props: FallbackProps) => ReactNode;
  onReset?: () => void;
  suspense?: boolean;
  errorBoundary?: boolean;
  loadingMessage?: string;
}

export function AsyncBoundary({
  children,
  loadingFallback,
  errorFallback,
  onReset,
  suspense = true,
  errorBoundary = true,
  loadingMessage,
}: AsyncBoundaryProps) {
  const [key, setKey] = useState(0);

  const handleReset = useCallback(() => {
    setKey((prev) => prev + 1);
    onReset?.();
  }, [onReset]);

  let content = children;

  if (errorBoundary) {
    content = (
      <ErrorBoundary
        key={key}
        FallbackComponent={errorFallback || ErrorFallback}
        onReset={handleReset}
      >
        {content}
      </ErrorBoundary>
    );
  }

  if (suspense) {
    content = (
      <Suspense fallback={loadingFallback || <LoadingFallback message={loadingMessage} />}>
        {content}
      </Suspense>
    );
  }

  return content;
} 