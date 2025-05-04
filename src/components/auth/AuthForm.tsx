import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';

interface AuthFormProps {
  type: 'login' | 'signup';
}

const AuthForm = ({ type }: AuthFormProps) => {
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      if (type === 'login') {
        // Call the login API endpoint
        const response = await fetch('http://localhost:5050/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
          // Handle validation errors from the API
          if (data.errors && Array.isArray(data.errors)) {
            throw new Error(data.errors.map(err => err.msg).join(', '));
          }
          throw new Error(data.msg || 'Invalid credentials');
        }

        // If successful, store the token and update auth context
        if (data.token) {
          localStorage.setItem('token', data.token);
          // Call the login function to update auth context state
          await login(email, password);
          navigate('/'); // Redirect handled by LoginPage, but adding as backup
        }
      } else {
        // Call the registration API instead of the signup function
        const response = await fetch('http://localhost:5050/api/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
          // Handle validation errors from the API
          if (data.errors && Array.isArray(data.errors)) {
            throw new Error(data.errors.map(err => err.msg).join(', '));
          }
          throw new Error(data.msg || 'Registration failed');
        }

        // If successful, store the token and redirect
        if (data.token) {
          localStorage.setItem('token', data.token);
          // Call the signup function if you need to update auth context
          await signup(name, email, password); 
          navigate('/'); // Redirect to home or dashboard
        }
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">
          {type === 'login' ? 'Login' : 'Sign Up'}
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          {type === 'login' 
            ? 'Login to access your Myntra account' 
            : 'Create your Myntra account to get started'}
        </p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded-md mb-4 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {type === 'signup' && (
          <div className="space-y-1">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your full name"
            />
          </div>
        )}

        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder={type === 'login' ? 'Enter password' : 'Create password'}
              className="pr-10"
              minLength={type === 'signup' ? 6 : undefined}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {type === 'signup' && (
            <p className="text-xs text-gray-500 mt-1">
              Password must be at least 6 characters
            </p>
          )}
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          disabled={isLoading}
        >
          {isLoading 
            ? 'Loading...' 
            : type === 'login' ? 'Login' : 'Sign Up'
          }
        </Button>
      </form>

      <div className="text-center mt-6">
        {type === 'login' ? (
          <p>
            New to Myntra?{' '}
            <Link to="/signup" className="text-primary hover:underline">
              Create an account
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;