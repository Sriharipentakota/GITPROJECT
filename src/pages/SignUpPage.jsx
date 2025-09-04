import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useUI } from '../context/UIContext';
import AuthForm from '../components/auth/AuthForm';

/**
 * Sign up page component
 */
function SignUpPage() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const { addNotification } = useUI();

  const handleSignUp = async (formData) => {
    const result = await signup(formData.name, formData.email, formData.password);
    
    if (result.success) {
      addNotification('Account created successfully! Welcome to RecipeBook!', 'success');
      navigate('/recipes');
    } else {
      addNotification(result.error, 'error');
    }
  };

  return (
    <AuthForm
      type="signup"
      onSubmit={handleSignUp}
      title="Create Your Account"
      subtitle="Join RecipeBook and start organizing your recipes"
      submitText="Create Account"
      footerText="Already have an account?"
      footerLink={{ to: '/login', text: 'Sign in' }}
    />
  );
}

export default SignUpPage;