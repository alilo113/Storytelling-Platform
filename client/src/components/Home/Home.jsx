import React from "react";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="flex bg-gray-800 p-4 justify-between items-center" id="header">
                <h1 className="text-white font-bold text-xl">Story Telling Platform</h1>
                <div className="text-white">
                    <Link to="/log-in" className="mr-2 bg-sky-700 p-2 rounded hover:bg-sky-600">Log in</Link>
                    <Link to="/sign-up" className="bg-sky-700 p-2 rounded hover:bg-sky-600">Sign up</Link>
                </div>
            </header>
            <main className="max-w-2xl mx-auto mt-6 p-4">
                <section className="mb-6 bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Share Your Story</h2>
                    <input
                        type="text"
                        placeholder="Story Title"
                        className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500"
                    />
                    <textarea
                        className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-500 mb-4"
                        placeholder="Write your story here..."
                    ></textarea>
                    <button className="w-full bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-lg transition duration-200">Post Story</button>
                </section>
                <section>
                    <h3 className="text-xl font-bold mb-4">Latest Stories</h3>
                    <article className="mb-4 bg-white p-4 rounded-lg shadow-md">
                        <h4 className="text-lg font-bold mb-2">Story Title</h4>
                        <p className="text-gray-700 mb-2">Once upon a time, in a land far, far away...</p>
                        <div className="text-sm text-gray-500">Posted by User123</div>
                    </article>
                    <article className="mb-4 bg-white p-4 rounded-lg shadow-md">
                        <h4 className="text-lg font-bold mb-2">Another Story Title</h4>
                        <p className="text-gray-700 mb-2">In a small village, there lived a brave young girl...</p>
                        <div className="text-sm text-gray-500">Posted by User456</div>
                    </article>
                    {/* Add more stories as needed */}
                </section>
            </main>
        </div>
    );
}