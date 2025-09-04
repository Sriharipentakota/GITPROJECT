import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Save } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useUI } from '../context/UIContext';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

/**
 * Profile page component
 * User profile management and settings
 */
function ProfilePage() {
  const { user, updateProfile } = useAuth();
  const { addNotification } = useUI();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    avatar: user?.avatar || ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await updateProfile(formData);
    
    if (result.success) {
      addNotification('Profile updated successfully!', 'success');
    } else {
      addNotification(result.error, 'error');
    }
    
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
          <p className="text-gray-600">Manage your account information and preferences.</p>
        </div>

        <Card className="p-6">
          {/* Avatar Section */}
          <div className="flex items-center space-x-6 mb-8">
            <div className="relative">
              <img
                src={formData.avatar}
                alt={formData.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-gray-100"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{formData.name}</h3>
              <p className="text-gray-600">{formData.email}</p>
            </div>
          </div>

          {/* Profile Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Enter your full name"
              />
              
              <Input
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <Input
              label="Avatar URL"
              value={formData.avatar}
              onChange={(e) => handleChange('avatar', e.target.value)}
              placeholder="https://example.com/avatar.jpg"
            />

            <div className="flex justify-end">
              <Button
                type="submit"
                variant="primary"
                loading={loading}
                className="flex items-center space-x-2"
              >
                <Save className="h-4 w-4" />
                <span>Save Changes</span>
              </Button>
            </div>
          </form>
        </Card>

        {/* Account Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Statistics</h3>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600">0</div>
                <div className="text-gray-600">Total Recipes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary-600">0</div>
                <div className="text-gray-600">Days Active</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ProfilePage;