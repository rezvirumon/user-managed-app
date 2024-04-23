import React, { useState } from 'react';

const AddUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        macAddress: '',
        billDate: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add validation if needed
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(formData);
        localStorage.setItem('users', JSON.stringify(users));
        // Clear form after submission if needed
        setFormData({ name: '', mobile: '', macAddress: '', billDate: '' });
    };

    return (
        <div className="container mx-auto">
            <div className="my-5 p-3 shadow-xl">
                <h3 className="text-center my-3 text-3xl">Add User</h3>
                <div className="w-full h-[60vh]">
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">MAC Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="MAC Address"
                                className="input input-bordered"
                                name="macAddress"
                                value={formData.macAddress}
                                onChange={handleInputChange}
                                required
                            />
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
            </div>
        </div>
    );
};

export default AddUser;
