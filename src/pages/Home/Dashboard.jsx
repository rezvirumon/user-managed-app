import React, { useState, useEffect } from 'react';
import DeleteUserModal from '../../DeleteUserModal';

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []);

    const totalUsers = users.length;

    const activeUsers = users.filter(user => user.active).length;

    const totalPayments = users.reduce((total, user) => total + parseFloat(user.pay || 0), 0);

    // Calculate total dues considering only users with positive due amounts
    const totalDues = users.reduce((total, user) => {
        if (user.due > 0) {
            return total + parseFloat(user.due);
        }
        return total;
    }, 0);

    // Define criteria for identifying advanced users
    const totalAdvancedUsers = users.filter(user => user.pay > 500).length;

    const totalPaidUsers = users.filter(user => user.due === 0).length;

    const totalUnpaidUsers = totalUsers - totalPaidUsers;

    return (
        <div className="container mx-auto min-h-screen">
            <div className="bg-base-200 shadow-xl glass rounded-xl lg:p-4 grid lg:grid-cols-4 lg:gap-2  md:grid-cols-3 mt-5">
                <div className="bg-blue-500 glass btn hover:bg-blue-600 lg:w-80 h-24 rounded-xl p-2 m-4 cursor-pointer">
                    <div className="text-white flex items-center justify-between h-full w-full">
                        <p className="flex justify-between w-full pr-4 items-center gap-3 text-2xl">Total Users
                            <span> {totalUsers}</span>
                        </p>
                    </div>
                </div>
                <div className="bg-green-700 glass btn hover:bg-green-600 lg:w-80 h-24 rounded-xl p-2 m-4 cursor-pointer">
                    <div className="text-white flex items-center justify-between h-full w-full">
                        <p className="flex justify-between w-full pr-4 items-center gap-3 text-2xl">Active Users
                            <span> {activeUsers}</span>
                        </p>
                    </div>
                </div>
                <div className="bg-purple-700 glass btn hover:bg-purple-600 lg:w-80 h-24 rounded-xl p-2 m-4 cursor-pointer">
                    <div className="text-white flex items-center justify-between h-full w-full">
                        <p className="flex justify-between w-full pr-4 items-center gap-3 text-2xl">Total Payments
                            <span> ${totalPayments.toFixed(2)}</span>
                        </p>
                    </div>
                </div>
                <div className="bg-red-700 glass btn hover:bg-red-600 lg:w-80 h-24  rounded-xl p-2 m-4 cursor-pointer">
                    <div className="text-white flex items-center justify-between h-full w-full">
                        <p className="flex justify-between w-full pr-4 items-center gap-3 text-2xl">Total Dues
                            <span>${totalDues.toFixed(2)}</span>
                        </p>
                    </div>
                </div>
                <div className="bg-yellow-700 glass btn hover:bg-yellow-600 lg:w-80 h-24  rounded-xl p-2 m-4 cursor-pointer">
                    <div className="text-white flex items-center justify-between h-full w-full">
                        <p className="flex justify-between w-full pr-4 items-center gap-3 text-2xl">Paid
                            <span>{totalPaidUsers}</span>
                        </p>
                    </div>
                </div>
                <div className="bg-purple-700 glass btn hover:bg-purple-600 lg:w-80 h-24 rounded-xl p-2 m-4 cursor-pointer">
                    <div className="text-white flex items-center justify-between h-full w-full">
                        <p className="flex justify-between w-full pr-4 items-center gap-3 text-2xl">Advanced
                            <span>{totalAdvancedUsers}</span>
                        </p>
                    </div>
                </div>
                <div className="bg-fuchsia-700 glass btn hover:bg-fuchsia-600 lg:w-80 h-24 rounded-xl p-2 m-4 cursor-pointer">
                    <div className="text-white flex items-center justify-between h-full w-full">
                        <p className={`flex justify-between w-full pr-4 items-center gap-3 text-2xl ${totalUnpaidUsers > 0 ? '' : ''}`}>Unpaid
                            <span> {totalUnpaidUsers}</span>
                        </p>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Dashboard;
