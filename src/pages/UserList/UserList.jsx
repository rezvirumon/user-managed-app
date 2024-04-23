import { FaUserCheck, FaUserEdit, FaUserTimes } from "react-icons/fa";


const UserList = () => {
    return (
        <div className="container mt-20 mx-auto">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-base-300">
                            <th></th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>MAC Address</th>
                            <th>M.Bill</th>
                            <th>Pay</th>
                            <th>Due</th>
                            <th>Device</th>
                            <th>Bill Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="hover">
                            <th>1</th>
                            <td>Rumon</td>
                            <td>+880 1823685472</td>
                            <td>FC:A6:21:AB:AB:44</td>
                            <td>100</td>
                            <td>50</td>
                            <td>50</td>
                            <td>04/23/2024</td>
                            <td>Mobile</td>
                            <td>
                                <ul className="flex lg:gap-3 lg:w-24">
                                    <li className="btn bg-green-300 text-xl"><FaUserCheck /></li>
                                    <li className="btn bg-blue-300 text-xl"><FaUserEdit /></li>
                                    <li className="btn bg-red-300 text-xl"><FaUserTimes /></li>
                                </ul>
                            </td>
                        </tr>
                   
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList;