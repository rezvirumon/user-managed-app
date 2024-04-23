import { FaTachometerAlt, FaUserPlus, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="">
            <ul className="flex gap-4 justify-center">
                <NavLink
                    to="/"
                    style={({ isActive, isPending, isTransitioning }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                        };
                    }}
                >
                    <li className="flex tooltip items-center gap-2 hover:text-green-600 transition-all ease-in-out" data-tip="Dashboard">
                        <FaTachometerAlt />
                        Dashboard
                    </li>
                </NavLink>
                <NavLink
                    to="/adduser"
                    style={({ isActive, isPending, isTransitioning }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                        };
                    }}
                >
                    <li className="flex tooltip items-center gap-2 hover:text-green-600 transition-all ease-in-out" data-tip="Add User">
                    <FaUserPlus />
                        Add
                    </li>
                </NavLink>
                <NavLink
                    to="/userlist"
                    style={({ isActive, isPending, isTransitioning }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                            viewTransitionName: isTransitioning ? "slide" : "",
                        };
                    }}
                >
                    <li className="flex tooltip items-center gap-2 hover:text-green-600 transition-all ease-in-out" data-tip="Users">
                        <FaUsers />
                        Users
                    </li>
                </NavLink>

            </ul>
        </div>
    );
};

export default Navbar;