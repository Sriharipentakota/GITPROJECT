import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import Card from '../ui/Card';

/**
 * Reusable authentication form component
 */
function AuthForm({ 
  type = 'login', 
  onSubmit, 
  loading = false,
  title,
  subtitle,
  submitText,
  footerText,
  footerLink
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (type === 'signup' && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (type !== 'forgot-password') {
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
      }

      if (type === 'signup') {
        if (formData.password !== formData.confirmPassword) {
          newErrors.confirmPassword = 'Passwords do not match';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      await onSubmit(formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="mt-2 text-gray-600">{subtitle}</p>
        </div>
        
        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {type === 'signup' && (
              <Input
                label="Full Name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                error={errors.name}
                placeholder="Enter your full name"
              />
            )}

            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              error={errors.email}
              placeholder="Enter your email"
            />

            {type !== 'forgot-password' && (
              <>
                <div className="relative">
                  <Input
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    error={errors.password}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-9 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                {type === 'signup' && (
                  <Input
                    label="Confirm Password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                    error={errors.confirmPassword}
                    placeholder="Confirm your password"
                  />
                )}
              </>
            )}

            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={loading}
              className="w-full"
            >
              {submitText}
            </Button>

            {type === 'login' && (
              <div className="text-center">
                <Link
                  to="/forgot-password"
                  className="text-sm text-primary-600 hover:text-primary-500 transition-colors"
                >
                  Forgot your password?
                </Link>
              </div>
            )}
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">{footerText} </span>
            <Link
              to={footerLink.to}
              className="font-medium text-primary-600 hover:text-primary-500 transition-colors"
            >
              {footerLink.text}
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default AuthForm;