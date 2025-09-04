import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useUI } from '../context/UIContext';
import AuthForm from '../components/auth/AuthForm';

/**
 * Forgot password page component
 */
function ForgotPasswordPage() {
  const [emailSent, setEmailSent] = useState(false);
  const { resetPassword } = useAuth();
  const { addNotification } = useUI();

  const handleResetPassword = async (formData) => {
    const result = await resetPassword(formData.email);
    
    if (result.success) {
      setEmailSent(true);
      addNotification('Password reset email sent!', 'success');
    } else {
      addNotification(result.error, 'error');
    }
  };

  if (emailSent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Check Your Email</h2>
            <p className="mt-4 text-gray-600">
              We've sent a password reset link to your email address. Please check your inbox and follow the instructions.
            </p>
          </div>
          <Link
            to="/login"
            className="inline-block text-primary-600 hover:text-primary-500 font-medium transition-colors"
          >
            Back to Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <AuthForm
      type="forgot-password"
      onSubmit={handleResetPassword}
      title="Reset Your Password"
      subtitle="Enter your email address and we'll send you a reset link"
      submitText="Send Reset Email"
      footerText="Remember your password?"
      footerLink={{ to: '/login', text: 'Sign in' }}
    />
  );
}

export default ForgotPasswordPage;