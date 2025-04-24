import React, { useState } from 'react'
import InputField from '../../components/inputFieldComponent'
import { Link, useNavigate } from 'react-router-dom';

export default function ForgotPasswordForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newConfirmPassword, setNewConfirmPassword] = useState('');
    let users = JSON.parse(sessionStorage.getItem('users') || '[]');
    const emailExists = users?.some(user => user?.email === email);
    const existedPassword = users?.find(user => user?.email === email)?.password;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the email exists
        if (!emailExists) {
            alert("There is no account created with this email");
            return;
        }

        // Check if the old password is the same as the existing password
        if (oldPassword === existedPassword) {
            alert("New password should not be like old password, try another new password");
            return;
        }

        // Check if the old password matches the confirmed new password
        if (oldPassword !== newConfirmPassword) {
            alert("Confirmed password and new password should match");
            return;
        }

        // Update the user's password if all checks pass
        users = users.map(user =>
            user?.email === email ? { ...user, password: newConfirmPassword } : user
        );

        // Notify the user of the successful password change
        alert("Password Changed, Login with newly created password");

        // Save the updated users list to session storage
        sessionStorage.setItem('users', JSON.stringify(users));

        // Navigate to the home page with a state indicating the password change
        navigate('/', { state: { passwordChanged: true } });
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <InputField
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"
                    required
                    className="form-control"
                    label="Name"
                />
                <InputField
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    placeholder="Enter your new password"
                    required
                    className="form-control"
                    label="Password"
                />

                <InputField
                    type="password"
                    value={newConfirmPassword}
                    onChange={(e) => setNewConfirmPassword(e.target.value)}
                    placeholder="Confirm your new password"
                    required
                    className="form-control"
                    label="Password"
                />
                <button type="submit" className="btn btn-primary w-100">Save changed Password</button>
            </form>
            <p className="mt-3 text-center">Don't want to change password ? <Link to="/" className="text-decoration-none">Login</Link></p>
        </div>
    )
}
