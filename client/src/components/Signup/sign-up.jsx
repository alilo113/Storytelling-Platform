import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate(); // Use the useNavigate hook

    const handleSignup = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/users", {
                username,
                password,
                email,
            });

            setEmail("");
            setPassword("");
            setUsername("");

            // Navigate to the home page after successful sign-up
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Sign-up</h1>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">User Name:</label>
                <input 
                    type="text" 
                    name="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500" 
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Password:</label>
                <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500" 
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500" 
                />
            </div>
            <button 
                onClick={handleSignup} 
                className="w-full bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-lg transition duration-200 mb-4">
                Sign Up
            </button>
            <Link to="/log-in" className="block text-center text-sky-700 hover:underline">
                I have an account
            </Link>
        </div>
    );
}