import React from "react";
import Sidebar from "../components/Sidebar";
import LibraryVideo from "../components/LibraryVideo";
import { Link } from "react-router-dom";

function RecordLibrary() {
    return (
        <div className="container mx-auto mt-12">
            <Link to={"/CreateVideo"}>
                <button className="text-white bg-violet-500 p-2 rounded-lg">Create</button>
            </Link>

            <LibraryVideo />
        </div>
    );
}

export default RecordLibrary;