import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useUI } from '../context/UIContext';
import AuthForm from '../components/auth/AuthForm';

/**
 * Login page component
 */
function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { addNotification } = useUI();

  const handleLogin = async (formData) => {
    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      addNotification('Welcome back!', 'success');
      navigate('/recipes');
    } else {
      addNotification(result.error, 'error');
    }
  };

  return (
    <AuthForm
      type="login"
      onSubmit={handleLogin}
      title="Welcome Back"
      subtitle="Sign in to your RecipeBook account"
      submitText="Sign In"
      footerText="Don't have an account?"
      footerLink={{ to: '/signup', text: 'Sign up' }}
    />
  );
}

export default LoginPage;