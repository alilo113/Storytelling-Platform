import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Home() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

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

  async function logOut() {
    const res = await fetch("http://localhost:5000/log-out", {
      method: "POST"
    })

    if(res.ok){
      localStorage.removeItem('token');
      navigate('/');
    }else{
      console.log("not able to log out")
    }
    // Optionally, you can call your backend logout endpoint here
    // await fetch('http://localhost:5000/log-out', { method: 'POST' });

    // Clear the token from local storage
    // Navigate to the login page
  }
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="flex bg-gray-800 p-4 justify-between items-center" id="header">
        <h1 className="text-white font-bold text-xl">Story Telling Platform</h1>
        <div className="text-white">
          {username ? (
            <div>
              <Link to="/profile" className="mr-4 text-white">
                {username}'s Profile
              </Link>
              <button className='mr-2 bg-sky-700 p-2 rounded hover:bg-sky-600' onClick={logOut}>Log out</button>
            </div>
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