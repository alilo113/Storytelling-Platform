import React from "react";

export function Profile() {
  // Example user stories data
  const userStories = [
    {
      id: 1,
      title: "My Adventure in the Mountains",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis nunc libero...",
    },
    {
      id: 2,
      title: "A Day at the Beach",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...",
    },
    {
      id: 3,
      title: "Exploring Ancient Ruins",
      content:
        "Sed et aliquet metus. Sed at magna sit amet felis vehicula eleifend quis sit amet ligula...",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Profile</h2>
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {/* Profile Content */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <p className="mt-1 text-sm text-gray-900">JohnDoe123</p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900">User Stories</h3>
            <ul className="mt-4 space-y-4">
              {userStories.map((story) => (
                <li key={story.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{story.title}</h3>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
                    <p className="text-sm text-gray-500">{story.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}