import React, { useState } from 'react';

const InputField = ({ type, value, onChange, placeholder, label }) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
console.log(type,"type");

    return (
        <div className={`mb-3 ${type === 'password' ? 'password-field' : ''}`}>
            <input
                type={type === 'password' && showPassword ? 'text' : type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required
                className={`form-control ${type === 'password' ? 'password-input-field' : ''}`}
                aria-label={label}
            />
            {(type === 'password' && value) && (
                <span className="toggle-password" onClick={togglePasswordVisibility}>
                    {showPassword ? '🙈' : '👁️'}
                </span>
            )}
        </div>
    );
};

export default InputField;
