import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Calendar, Edit2, Save, X, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import styles from './Profile.module.css';

const Profile = () => {
  const navigate = useNavigate();
  const { user, updateProfile, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    password: user?.password || '',
  });

  if (!user) {
    navigate('/');
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Update user in localStorage users array
    let users = JSON.parse(localStorage.getItem('busapp_users') || '[]');
    users = users.map(u =>
      u.id === user.id
        ? { ...u, ...formData }
        : u
    );
    localStorage.setItem('busapp_users', JSON.stringify(users));
    localStorage.setItem('busapp_user', JSON.stringify({ ...user, ...formData }));
    updateProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password || '',
    });
    setIsEditing(false);
  };

  const joinDate = new Date(user.joinDate).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className={styles.profilePage}>
      <div className="container">
        <div className={styles.profileContainer}>
          <div className={styles.profileHeader}>
            <div className={styles.avatar}>
              <User size={48} />
            </div>
            <div className={styles.userInfo}>
              <h1>My Profile</h1>
              <p>Manage your account information</p>
            </div>
            <button
              className={`btn ${isEditing ? 'btn-secondary' : 'btn-primary'} p-2`}
              onClick={() => {
                if (!isEditing) {
                  setFormData({
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    password: user.password || '',
                  });
                }
                setIsEditing(!isEditing);
              }}
            >
              {isEditing ? <X size={20}  style={{ marginRight: '0.5rem' }} /> : <Edit2 size={20}   style={{ marginRight: '0.5rem' }}/>}
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          <div className={styles.profileContent}>
            <div className={styles.profileSection}>
              <h2>Personal Information</h2>

              <div className={styles.fieldGrid}>
                <div className={styles.field}>
                  <label>
                    <User size={16} />
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input"
                      placeholder="Enter your full name"
                    />
                  ) : (
                    <div className={styles.fieldValue}>{user.name}</div>
                  )}
                </div>

                <div className={styles.field}>
                  <label>
                    <Mail size={16} />
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input"
                      placeholder="Enter your email"
                    />
                  ) : (
                    <div className={styles.fieldValue}>{user.email}</div>
                  )}
                </div>

                <div className={styles.field}>
                  <label>
                    <Phone size={16} />
                    Phone Number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input"
                      placeholder="Enter your phone number"
                    />
                  ) : (
                    <div className={styles.fieldValue}>{user.phone}</div>
                  )}
                </div>

                {isEditing && (
                  <div className={styles.field}>
                    <label>
                      Password
                    </label>
                    <div className={styles.passwordWrapper}>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="input"
                        placeholder="Enter new password"
                      />
                      <button
                        type="button"
                        className={styles.eyeButton}
                        onClick={() => setShowPassword((prev) => !prev)}
                        tabIndex={-1}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                )}

                <div className={styles.field}>
                  <label>
                    <Calendar size={16} />
                    Member Since
                  </label>
                  <div className={styles.fieldValue}>{joinDate}</div>
                </div>
              </div>

              {isEditing && (
                <div className={styles.editActions}>
                  <button className="btn btn-secondary" onClick={handleCancel}>
                    Cancel
                  </button>
                  <button className="btn btn-success" onClick={handleSave}>
                    <Save size={20} />
                    Save Changes
                  </button>
                </div>
              )}
            </div>

            <div className={styles.profileSection}>
              <h2>Quick Actions</h2>
              <div className={styles.actionGrid}>
                <button
                  className={styles.actionCard}
                  onClick={() => navigate('/bookings')}
                >
                  <div className={styles.actionIcon}>📋</div>
                  <div>
                    <h3>My Bookings</h3>
                    <p>View and manage your bookings</p>
                  </div>
                </button>

                <button
                  className={styles.actionCard}
                  onClick={() => navigate('/')}
                >
                  <div className={styles.actionIcon}>🚌</div>
                  <div>
                    <h3>Book a Trip</h3>
                    <p>Find and book your next journey</p>
                  </div>
                </button>
              </div>
            </div>

            <div className={styles.profileSection}>
              <h2>Account Settings</h2>
              <div className={styles.settingsGrid}>
                <button className={styles.settingItem}>
                  <span>Notifications</span>
                  <div className={styles.toggle}>
                    <input type="checkbox" defaultChecked />
                    <span className={styles.slider}></span>
                  </div>
                </button>

                <button className={styles.settingItem}>
                  <span>SMS Updates</span>
                  <div className={styles.toggle}>
                    <input type="checkbox" defaultChecked />
                    <span className={styles.slider}></span>
                  </div>
                </button>
              </div>
            </div>

            <div className={styles.dangerZone}>
              <h2>Account Actions</h2>
              <button className={styles.logoutButton} onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;