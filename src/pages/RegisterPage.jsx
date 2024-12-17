import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

function RegisterPage() {
    const [error, setError] = useState('');
    const { register } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await register(email, password);
        } catch (error) {
            setError('This email is already registered. Please use a different email.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-8 w-full sm:w-96">
                <div className="flex flex-row justify-between">
                    <h2 className="mb-6">Register</h2>
                    <Link to="/">Go Back</Link>
                    {error && <p className="mb-4">{error}</p>}
                </div>

                <form onSubmit={handleRegister}>
                    {/* EMAIL */}
                    <div className="mb-4">
                        <label className="block">Email</label>
                        <input 
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-4 py-2 border border-black"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* PASSWORD */}
                    <div className="mb-4">
                        <label className="block">Password</label>
                        <input 
                            type="password"
                            id="password"
                            className="mt-1 block w-full px-4 py-2 border border-black"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* REGISTER BUTTON */}
                    <button type="submit" className="w-full py-2">Register</button>
                </form>

                <div className="mt-4 text-center">
                    <p>
                        Already have an account?
                        <Link to="/login" className=""> Login Here </Link>
                    </p>
                </div>
            </div>
       </div>
    );
}

export default RegisterPage;