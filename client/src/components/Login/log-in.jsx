import React from "react";
import { Link } from 'react-router-dom';

export function Login() {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Log In</h1>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">User Name:</label>
                <input type="text" name="userName" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Password:</label>
                <input type="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500" />
            </div>
            <button className="w-full bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-lg transition duration-200 mb-4">Log in</button>
            <Link to="/sign-up" className="block text-center text-sky-700 hover:underline">I have an account</Link>
        </div>
    );
}