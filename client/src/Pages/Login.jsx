import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        // Perform login authentication
        // This is where you would interact with the blockchain to authenticate the user
        // You can use smart contracts to manage user credentials and authentication
        console.log('Logging in with username:', username, 'and password:', password);
    }

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Username:</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={handleUsernameChange} 
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={handlePasswordChange} 
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" 
                    />
                </div>
                <button 
                    type="button" 
                    onClick={handleLogin} 
                    className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
