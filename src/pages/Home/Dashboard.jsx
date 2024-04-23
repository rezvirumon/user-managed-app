import { FaDollarSign, FaUserCheck, FaUsers } from "react-icons/fa";


const Dashboard = () => {
    return (
        <div>
            <div className="container  mx-auto min-h-screen">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-center mt-5">
              <div className="bg-blue-500 glass btn hover:bg-blue-600 w-80 h-24 shadow-xl rounded-xl p-2 m-4 cursor-pointer">
                    <div className="text-white flex items-center justify-between h-full w-full">
                        <p className="flex items-center gap-3 text-2xl">
                            <FaUsers />
                            Total
                        </p>
                        <p className="flex items-center gap-3 text-6xl">
                            50
                        </p>
                    </div>
                </div>
                <div className="bg-green-500 glass btn hover:bg-green-600 w-80 h-24 shadow-xl rounded-xl p-2 m-4 cursor-pointer">
                    <div className="text-white flex items-center justify-between h-full w-full">
                        <p className="flex items-center gap-3 text-2xl">
                            <FaUserCheck  />
                            Active
                        </p>
                        <p className="flex items-center gap-3 text-6xl">
                            40
                        </p>
                    </div>
                </div>
                <div className="bg-purple-500 glass btn hover:bg-purple-600 w-80 h-24 shadow-xl rounded-xl p-2 m-4 cursor-pointer">
                    <div className="text-white flex items-center justify-between h-full w-full">
                        <p className="flex items-center gap-3 text-2xl">
                            <FaDollarSign />
                            Pay
                        </p>
                        <p className="flex items-center gap-3 text-6xl">
                            5000
                        </p>
                    </div>
                </div>
                <div className="bg-red-500 glass btn hover:bg-red-600 w-80 h-24 shadow-xl rounded-xl p-2 m-4 cursor-pointer">
                    <div className="text-white flex items-center justify-between h-full w-full">
                        <p className="flex items-center gap-3 text-2xl">
                            <FaDollarSign />
                            Due
                        </p>
                        <p className="flex items-center gap-3 text-6xl">
                            5000
                        </p>
                    </div>
                </div>
              </div>

            </div>

        </div>
    );
};

export default Dashboard;