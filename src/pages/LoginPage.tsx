import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import AuthForm from '@/components/auth/AuthForm';
import { useAuth } from '@/contexts/AuthContext';

const LoginPage = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is already authenticated
    const checkAuthStatus = async () => {
      // If authenticated and we have user data, redirect to home
      if (isAuthenticated && user) {
        navigate('/');
      } else {
        // Otherwise, finish loading state
        setIsLoading(false);
      }
    };
    
    checkAuthStatus();
  }, [isAuthenticated, user, navigate]);

  // Show loading or the login form
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p>Loading...</p>
          </div>
        ) : (
          <AuthForm type="login" />
        )}
      </div>
    </Layout>
  );
};

export default LoginPage;