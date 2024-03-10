import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import  Footer  from '../Components/Footer';

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
        <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-xl w-1/2">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Username:</label>
              <input 
                type="text" 
                value={username} 
                onChange={handleUsernameChange} 
                className="mt-1 p-2 block w-full rounded-md border border-gray-400 focus:ring-indigo-500 focus:border-indigo-500" 
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password:</label>
              <input 
                type="password" 
                value={password} 
                onChange={handlePasswordChange} 
                className="mt-1 p-2 block w-full rounded-md border border-gray-400 focus:ring-indigo-500 focus:border-indigo-500" 
              />
            </div>
            <button 
              type="button" 
              onClick={handleLogin} 
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            >
              Login
            </button>
          </form>
        </div>
        <div className="mt-auto">
          <Footer/>
        </div>
      </div>
    );
}

export default Login;
