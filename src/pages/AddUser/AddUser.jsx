

const AddUser = () => {
    return (
        <div className="container mx-auto">
            <div className="my-5  p-3 shadow-xl">
                <h3 className="text-center my-3 text-3xl">Add User</h3>
                <div className="w-full h-[60vh]">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile</span>
                            </label>
                            <input type="number" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">MAC Address</span>
                            </label>
                            <input type="text" placeholder="MAC Address" className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Bill Date</span>
                            </label>
                            <input type="date" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success text-white">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;