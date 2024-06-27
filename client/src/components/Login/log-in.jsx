import React, { useState } from "react";
import { Link } from 'react-router-dom';

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/log-in", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const { token } = await response.json(); // Extract token from response
                localStorage.setItem('token', token); // Store token in localStorage
                console.log("Token stored in localStorage:", token);
                window.location.href = "/"; // Example of direct navigation
            } else {
                const errorMessage = await response.text();
                setError(errorMessage || "Invalid username or password");
            }
        } catch (error) {
            console.error("Error happened:", error);
            setError("An error occurred, please try again.");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Log In</h1>
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">User Name:</label>
                <input
                    type="text"
                    name="username"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <div className="text-red-700">{error}</div>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Password:</label>
                <input
                    type="password"
                    name="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="text-red-700">{error}</div>
            </div>
            <button type="submit" className="w-full bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-lg transition duration-200 mb-4">Log in</button>
            <Link to="/sign-up" className="block text-center text-sky-700 hover:underline">I don't have an account</Link>
        </form>
    );
}