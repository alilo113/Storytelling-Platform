import React from "react";
import { Link } from "react-router-dom" 

export function Home(){
    return(
        <div className="flex bg-gray-100 p-5 justify-between items-center">
            <h1 className=" font-bold text-xl">Story Telling Platform</h1>
                <div className="text-white">
                    <Link to={"/log-in"} className="mr-5 bg-sky-700 p-3 rounded hover:bg-gray-400">Log in</Link>
                    <Link to={"/sign-up"} className="mr-5 bg-sky-700 p-3 rounded hover:bg-slate-400">Sign up</Link>
            </div>
        </div>
    )
}