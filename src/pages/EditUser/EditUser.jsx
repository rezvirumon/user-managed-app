import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditUser = () => {
    // State to store user data
    const [user, setUser] = useState({
        name: '',
        mobile: '',
        macAddress: '',
        billDate: '',
        billAmount: 0,
        pay: 0, // Added pay field
        due: 0 // Added due field
    });

    // State for controlling toast visibility
    const [showToast, setShowToast] = useState(false);

    // Extract user ID from URL params
    const { id } = useParams();

    useEffect(() => {
        // Fetch user data from local storage based on ID
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userData = storedUsers[id];
        if (userData) {
            setUser(userData);
        }
    }, [id]);

    // Handler for input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'billAmount') {
            // Calculate the due when billAmount changes
            setUser(prevUser => ({
                ...prevUser,
                [name]: value,
                due: value - prevUser.pay
            }));
        } else {
            setUser({ ...user, [name]: value });
        }
    };

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Update user data in local storage
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        storedUsers[id] = user;
        localStorage.setItem('users', JSON.stringify(storedUsers));

        // Show the toast after updating the user
        setShowToast(true);
        
        // Automatically hide the toast after 1 second
        setTimeout(() => {
            setShowToast(false);
        }, 1000);
    };

    return (
        <div className="container mx-auto">
            <h3 className="text-center my-3 text-3xl">Edit User</h3>
            <div className="w-full max-w-lg mx-auto">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" name="name" value={user.name} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">Mobile</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobile" type="text" placeholder="Mobile" name="mobile" value={user.mobile} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="macAddress">MAC Address</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="macAddress" type="text" placeholder="MAC Address" name="macAddress" value={user.macAddress} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="billDate">Bill Date</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="billDate" type="date" placeholder="Bill Date" name="billDate" value={user.billDate} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="billAmount">Bill Amount</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="billAmount" type="number" placeholder="Bill Amount" name="billAmount" value={user.billAmount} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pay">Pay</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pay" type="number" placeholder="Pay" name="pay" value={user.pay} onChange={handleInputChange} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="due">Due</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="due" type="number" placeholder="Due" name="due" value={user.due} onChange={handleInputChange} required readOnly />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Update</button>
                    </div>
                </form>
            </div>
            {showToast && (
                <div className="toast toast-center top-32 toast-middle">
                    <div className="alert alert-success">
                        <span>User updated successfully.</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditUser;
