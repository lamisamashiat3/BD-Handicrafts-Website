import { Link, NavLink } from "react-router-dom";
import LOGO from '../../../assets/LOGO.png';
import userDefaultPic from '../../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
        .then(() => {
            console.log("Signed out successfully");
        })
        .catch(error => {
            console.error("Error signing out: ", error);
        });
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
       
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <span className='flex'>
                <div className="w-20  rounded-full">
                        <img src={LOGO} />
                    </div>
                <a className="btn btn-ghost text-4xl text-yellow-100  mt-3 font-extrabold">Bd Handicrafts</a></span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={userDefaultPic} />
                    </div>
                </label>
                {
                    user ?
                        <button onClick={handleSignOut} className="btn btn-outline btn-warning">Sign Out</button>
                        :
                        <Link to="/login">
                            <button className="btn btn-outline btn-warning">Login</button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;