import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Fetch and decode JWT token from local storage
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = parseJwt(token);
      setUsername(decodedToken.username);
    }
  }, []);

  // Function to decode JWT token (extracted from payload)
  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="flex bg-gray-800 p-4 justify-between items-center" id="header">
        <h1 className="text-white font-bold text-xl">Story Telling Platform</h1>
        <div className="text-white">
          {username ? (
            <Link to="/profile" className="mr-4 text-white">
              {username}'s Profile
            </Link>
          ) : (
            <>
              <Link to="/log-in" className="mr-2 bg-sky-700 p-2 rounded hover:bg-sky-600">
                Log in
              </Link>
              <Link to="/sign-up" className="bg-sky-700 p-2 rounded hover:bg-sky-600">
                Sign up
              </Link>
            </>
          )}
        </div>
      </header>
      <main className="max-w-2xl mx-auto mt-6 p-4">
        {/* Your existing content */}
      </main>
    </div>
  );
}