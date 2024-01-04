import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  
  
  useEffect(() => {
    const handleErrors = (error) => {
      if (
        error.message.includes('Failed to fetch dynamically imported module') ||
        error.message.includes('Importing a module script failed')
      ) {
        // Handle the error as needed, e.g., by redirecting to an error page.
        // You can use React Router to navigate to an error route.
        setHasError(true);
      }
    };

    window.addEventListener('error', handleErrors);

    return () => {
      window.removeEventListener('error', handleErrors);
    };
  }, []);

  if (hasError) {
    window.location.reload();
  }

  return <>{children}</>;
}

export default ErrorBoundary;
