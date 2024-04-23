import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        macAddress: '',
        billDate: '',
        billAmount: 0
    });

    const [showToast, setShowToast] = useState(false); // State for controlling toast visibility

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(formData);
        localStorage.setItem('users', JSON.stringify(users));
        setFormData({ name: '', mobile: '', macAddress: '', billDate: '', billAmount: 0 });
        setShowToast(true); // Show the toast after adding the user

        // Automatically hide the toast after 1 second
        setTimeout(() => {
            setShowToast(false);
        }, 1000);
    };

    const isValidMacAddress = (mac) => {
        const macRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
        return macRegex.test(mac);
    };

    return (
        <div className="container mx-auto">
            <div className="my-5 p-3 shadow-xl">
                <h3 className="text-center my-3 text-3xl">Add User</h3>
                <div className="w-full h-full lg:h-[60vh]">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="grid lg:grid-cols-2 lg:gap-10">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Mobile</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Mobile"
                                    className="input input-bordered"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 lg:gap-10">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">MAC Address</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="MAC Address (XX:XX:XX:XX:XX:XX)"
                                    className="input input-bordered"
                                    name="macAddress"
                                    value={formData.macAddress}
                                    onChange={handleInputChange}
                                    required
                                />
                                {!isValidMacAddress(formData.macAddress) && (
                                    <p className="text-red-500 mt-1">Please enter a valid MAC address</p>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Bill Amount</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Bill Amount"
                                    className="input input-bordered"
                                    name="billAmount"
                                    value={formData.billAmount}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Bill Date</span>
                            </label>
                            <input
                                type="date"
                                placeholder="Date"
                                className="input input-bordered"
                                name="billDate"
                                value={formData.billDate}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-control mt-6 w-32 shadow-xl glass">
                            <button type="submit" className="btn btn-success text-white">Add</button>
                        </div>
                    </form>
                </div>
            {showToast && (
                <div className="toast toast-center top-32 toast-middle">
                    <div className="alert alert-success">
                        <span>User added successfully.</span>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
};

export default AddUser;
