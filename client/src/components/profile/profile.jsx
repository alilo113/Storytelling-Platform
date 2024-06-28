import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Profile() {
  const [username, setUsername] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      const decodedToken = parseJwt(token);
      setUsername(decodedToken.username)
      console.log(decodedToken)
    }
  }, [])

  function parseJwt(token){
    try {
      return JSON.parse(atob(token.split(".")[1]))
    } catch (error) {
      return null
    }
  }

  const user = {
    name: 'John Doe',
    stories: [
      'Once upon a time, in a faraway land...',
      'In the depths of the enchanted forest...',
      'Underneath the starry night sky...'
    ],
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm mb-6">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">{username}</h2>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <div className='flex item-center justify-between'>
          <h3 className="text-xl font-semibold mb-4">User Stories</h3>
          <Link to={"/"}>Home page</Link>
        </div>
        <div className="space-y-4">
          {user.stories.map((story, index) => (
            <div key={index} className="p-4 bg-gray-200 rounded-lg shadow-md">
              <p className="text-lg">{story}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}