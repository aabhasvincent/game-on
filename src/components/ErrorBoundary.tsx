import { Navigate } from 'react-router-dom';

const ErrorBoundary = () => {
  return (
    <Navigate to="/"  replace />
  )
}
export default ErrorBoundary