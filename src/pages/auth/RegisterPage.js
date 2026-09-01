import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppContext } from '../../context/AppContext';

const schemas = {
  step1: yup.object({
    name: yup
      .string()
      .min(2, 'Name must be at least 2 characters')
      .required('Full name is required'),
    email: yup
      .string()
      .email('Please enter a valid email address')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
  }),
  step2: yup.object({
    bio: yup.string().max(500, 'Bio must be less than 500 characters'),
    location: yup.string().max(100, 'Location must be less than 100 characters'),
    hourlyRate: yup
      .number()
      .min(0, 'Hourly rate must be positive')
      .max(1000, 'Hourly rate must be less than $1000'),
  })
};

const RegisterPage = () => {
  const { register: registerUser, addNotification, isAuthenticated } = useAppContext();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  // Redirect if already logged in
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    getValues
  } = useForm({
    resolver: yupResolver(schemas[`step${currentStep}`]),
    mode: 'onChange'
  });

  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      setFormData({ ...formData, ...getValues() });
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const onSubmit = async (data) => {
    const completeData = { ...formData, ...data };
    setIsLoading(true);
    
    try {
      await registerUser(completeData);
      addNotification('Welcome to MicroLearn! Your account has been created successfully.', 'success');
      navigate('/dashboard', { replace: true });
    } catch (error) {
      addNotification(error.message || 'Registration failed. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <div className="mt-1">
          <input
            {...register('name')}
            type="text"
            autoComplete="name"
            className={`input-field ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <div className="mt-1">
          <input
            {...register('email')}
            type="email"
            autoComplete="email"
            className={`input-field ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="mt-1">
          <input
            {...register('password')}
            type="password"
            autoComplete="new-password"
            className={`input-field ${errors.password ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
            placeholder="Create a strong password"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <div className="mt-1">
          <input
            {...register('confirmPassword')}
            type="password"
            autoComplete="new-password"
            className={`input-field ${errors.confirmPassword ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
          )}
        </div>
      </div>

      <div>
        <button
          type="button"
          onClick={nextStep}
          className="w-full btn-primary"
        >
          Continue
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
          Bio (Optional)
        </label>
        <div className="mt-1">
          <textarea
            {...register('bio')}
            rows={4}
            className={`input-field ${errors.bio ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
            placeholder="Tell us about yourself and your expertise..."
          />
          {errors.bio && (
            <p className="mt-1 text-sm text-red-600">{errors.bio.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Location (Optional)
        </label>
        <div className="mt-1">
          <input
            {...register('location')}
            type="text"
            className={`input-field ${errors.location ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
            placeholder="e.g., San Francisco, CA"
          />
          {errors.location && (
            <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700">
          Hourly Rate (Optional)
        </label>
        <div className="mt-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              {...register('hourlyRate')}
              type="number"
              min="0"
              step="0.01"
              className={`input-field pl-7 ${errors.hourlyRate ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
              placeholder="0.00"
            />
          </div>
          {errors.hourlyRate && (
            <p className="mt-1 text-sm text-red-600">{errors.hourlyRate.message}</p>
          )}
          <p className="mt-1 text-sm text-gray-500">
            Set your teaching rate if you plan to offer lessons
          </p>
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          type="button"
          onClick={prevStep}
          className="w-full btn-secondary"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full btn-primary"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Creating Account...
            </div>
          ) : (
            'Create Account'
          )}
        </button>
      </div>
    </div>
  );

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return 'Create Your Account';
      case 2:
        return 'Complete Your Profile';
      default:
        return 'Sign Up';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="mx-auto h-12 w-12 bg-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">μL</span>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {getStepTitle()}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              Sign in here
            </Link>
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center justify-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${currentStep >= 1 ? 'bg-primary-600' : 'bg-gray-300'}`}></div>
          <div className={`w-8 h-1 ${currentStep >= 2 ? 'bg-primary-600' : 'bg-gray-300'}`}></div>
          <div className={`w-3 h-3 rounded-full ${currentStep >= 2 ? 'bg-primary-600' : 'bg-gray-300'}`}></div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
        </form>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            By creating an account, you agree to our{' '}
            <a href="#" className="text-primary-600 hover:text-primary-500">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-primary-600 hover:text-primary-500">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;