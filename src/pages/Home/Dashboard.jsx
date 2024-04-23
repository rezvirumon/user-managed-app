// Dashboard.js

import React, { useState, useEffect } from 'react';

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users from local storage on component mount
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []);

    const totalUsers = users.length;
    const activeUsers = users.filter(user => user.active).length;
    const totalPayments = users.reduce((total, user) => total + user.payment, 0);
    const totalDues = users.reduce((total, user) => total + user.due, 0);

    return (
        <div className="container mx-auto min-h-screen">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-center mt-5">
                <div className="bg-blue-500 glass btn hover:bg-blue-600 w-80 h-24 shadow-xl rounded-xl p-2 m-4 cursor-pointer">
                    <div className="text-white flex items-center justify-between h-full w-full">
                        <p className="flex items-center gap-3 text-2xl">Total Users: {totalUsers}</p>
                    </div>
                </div>
                <div className="bg-green-500 glass btn hover:bg-green-600 w-80 h-24 shadow-xl rounded-xl p-2 m-4 cursor-pointer">
                    <div className="text-white flex items-center justify-between h-full w-full">
                        <p className="flex items-center gap-3 text-2xl">Active Users: {activeUsers}</p>
                    </div>
                </div>
                <div className="bg-purple-500 glass btn hover:bg-purple-600 w-80 h-24 shadow-xl rounded-xl p-2 m-4 cursor-pointer">
                    <div className="text-white flex items-center justify-between h-full w-full">
                        <p className="flex items-center gap-3 text-2xl">Total Payments: ${totalPayments}</p>
                    </div>
                </div>
                <div className="bg-red-500 glass btn hover:bg-red-600 w-80 h-24 shadow-xl rounded-xl p-2 m-4 cursor-pointer">
                    <div className="text-white flex items-center justify-between h-full w-full">
                        <p className="flex items-center gap-3 text-2xl">Total Dues: ${totalDues}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
