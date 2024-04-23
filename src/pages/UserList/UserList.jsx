import React, { useState, useEffect } from 'react';
import { FaCopy, FaPhone, FaUserCheck, FaUserEdit, FaUserTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = storedUsers.map(user => ({
            ...user,
            mBill: 100,
            due: user.billAmount - user.pay
        }));
        setUsers(updatedUsers);
    }, []);

    const deleteUser = (index) => {
        const isConfirmed = window.confirm('Are you sure you want to delete this user?');
        if (isConfirmed) {
            const updatedUsers = [...users];
            updatedUsers.splice(index, 1);
            setUsers(updatedUsers);
            localStorage.setItem('users', JSON.stringify(updatedUsers));
        }
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    const renderPaymentStatus = (user) => {
        if (user.due === 0) {
            return <span className='bg-green-100 btn w-24'>Paid</span>;
        } else if (user.pay > user.billAmount) {
            return <span className='bg-blue-100 btn w-24'>Advanced</span>;
        } else {
            return <span className='bg-red-100 btn w-24'>Unpaid</span>;
        }
    };

    const filteredUsers = users.filter(user => {
        const { name, mobile, macAddress } = user;
        const query = searchQuery.toLowerCase();
        return name.toLowerCase().includes(query) || mobile.includes(query) || macAddress.toLowerCase().includes(query);
    });

    return (
        <div className="container mt-20 mx-auto">
            <h3 className="text-center my-3 text-3xl">Users List</h3>
            <div className="overflow-x-auto shadow-xl rounded-xl">
                <div className="lg:flex md:flex space-y-4 p-5 justify-between my-4">
                    <Link to="/adduser">
                        <div className='btn btn-accent'>
                            Add New User
                        </div>
                    </Link>
                    <div className=''>
                        <input type="text" placeholder="Search user" className="input input-bordered input-accent w-full max-w-xs" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr className="bg-base-300 border">
                            <th>No.</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>MAC Address</th>
                            <th>M.Bill</th>
                            <th>Pay</th>
                            <th>Due</th>
                            <th>Bill Date</th>
                            <th>Bill Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user, index) => (
                            <tr className="hover hover:shadow-xl" key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.mobile}</td>
                                <td>
                                    <div className='flex gap-2'>
                                        <span>{user.macAddress}</span>
                                        <FaCopy className='ml-2 cursor-pointer text-xl' onClick={() => copyToClipboard(user.macAddress)} />
                                    </div>
                                </td>
                                <td>{user.mBill}</td>
                                <td>{user.pay}</td>
                                <td>{user.due}</td>
                                <td>{user.billDate}</td>
                                <td className=''>{renderPaymentStatus(user)}</td>
                                <td>
                                    <td>
                                        <div className='lg:space-x-4 space-y-2'>
                                            <Link to={`/edituser/${index}`} className="btn bg-blue-100"><FaUserEdit className='text-xl' /></Link>
                                            <button className="btn bg-red-100" onClick={() => deleteUser(index)}><FaUserTimes className='text-xl' /></button>
                                            <a href={`tel:${user.mobile}`} className="btn bg-green-100"><FaPhone className='text-xl' /></a>
                                        </div>
                                    </td>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;
