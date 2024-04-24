import React, { useState, useEffect } from 'react';
import { FaCopy, FaPhone, FaUserEdit, FaUserTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MacDevice from '../../components/DashComponents/MacDevice/MacDevice';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(50);
    const [selectedStatus, setSelectedStatus] = useState('All');

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

    // Pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container  mx-auto">
            <div className='flex justify-evenly my-10 lg:justify-start lg:gap-3'>
                <Link to="/adduser">
                    <div className='btn btn-accent shadow-xl'>
                        Add New User
                    </div>
                </Link>
                <MacDevice></MacDevice>
            </div>
            <h3 className="text-center my-3 text-3xl">Users List</h3>
            <div className="overflow-x-auto shadow-xl border h-[80vh] mb-10 rounded-xl">
                <div className="lg:flex items-center md:flex space-y-4 p-5 justify-between my-4">
                    <div className=''>
                        <input type="text" placeholder="Search user" className="shadow-xl input input-bordered input-accent w-full lg:w-96 border lg:max-w-xs" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    </div>
                    <div className=''>
                        <select className="shadow-xl select select-info w-full lg:max-w-xs" value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
                            <option value="All">Status</option>
                            <option value="All">All</option>
                            <option value="Paid">Paid</option>
                            <option value="Unpaid">Unpaid</option>
                            <option value="Advanced">Advanced</option>
                        </select>
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
                        {currentUsers.map((user, index) => (
                            <tr className="hover hover:shadow-xl" key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.mobile}</td>
                                <td>
                                    <div className='flex gap-2'>
                                        <span>{user.macAddress.toUpperCase()}</span>
                                        <FaCopy className='ml-2 cursor-pointer text-xl' onClick={() => copyToClipboard(user.macAddress.toUpperCase())} />
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
                {/* Pagination */}
                <div className="pagination flex justify-center my-5 gap-5 ">
                    <button className="btn" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                    {Array.from({ length: Math.ceil(users.length / usersPerPage) }, (_, i) => (
                        <button key={i} className={`btn ${currentPage === i + 1 ? 'btn-accent' : ''}`} onClick={() => paginate(i + 1)}>{i + 1}</button>
                    ))}
                    <button className="btn" onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(users.length / usersPerPage)}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default UserList;
