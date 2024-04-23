import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users from local storage on component mount
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        setUsers(storedUsers);
    }, []);

    const deleteUser = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    };

    return (
        <div className="container mt-20 mx-auto">
            <h3 className="text-center text-xl mb-10">User List</h3>
            <div className="overflow-x-auto">
                <div className="btn my-4">
                    <Link to="/adduser">Add New User</Link>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td> {/* Display index + 1 as the number */}
                                <td>{user.name}</td>
                                <td>{user.mobile}</td>
                                <td>{user.macAddress}</td>
                                <td>{user.mBill}</td> {/* Display user's M.Bill value */}
                                <td>{user.pay}</td> {/* Display user's Pay value */}
                                <td>{user.due}</td> {/* Display user's Due value */}
                                <td>{user.billDate}</td>
                                <td>
                                    <Link to={`/edituser/${index}`} className="btn bg-blue-300 text-xl">Edit</Link>
                                    <button className="btn bg-red-300 text-xl" onClick={() => deleteUser(index)}>Delete</button>
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
