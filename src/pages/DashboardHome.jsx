// src/DashboardHome.js
import React from 'react';
import {Link} from "react-router-dom";

const DashboardHome = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md">
                <h1 className="text-4xl font-extrabold text-gray-900">Welcome Admin</h1>
                <p className="mt-4 text-lg text-gray-700">This is your dashboard. Here you can manage all the administrative tasks.</p>
                <div className="mt-6 space-x-4">
                    <Link to="/StudentDashboard">

                    <button className="px-6 py-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300">Get Started</button>
                    </Link>
                    <button className="px-6 py-2 bg-gray-300 text-gray-700 rounded-full shadow-lg hover:bg-gray-400 transition duration-300">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
