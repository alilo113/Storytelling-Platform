import React from "react";

export function Home(){
    return(
        <div className="flex bg-gray-100 p-5 justify-between items-center">
            <h1 className=" font-bold text-xl">Story Telling Platform</h1>
                <div className="text-white">
                    <button className="mr-5 bg-sky-700 p-3 rounded hover:bg-gray-400">Log in</button>
                    <button className="mr-5 bg-sky-700 p-3 rounded hover:bg-slate-400">Sign up</button>
            </div>
        </div>
    )
}