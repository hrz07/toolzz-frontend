import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { signOut } from 'firebase/auth';


const Navbar = () => {

    const [user] = useAuthState(auth);


    const logout = () => {
        signOut(auth);
        // localStorage.removeItem('accessToken');
    };

    return (
        <div>
            <div className="navbar flex justify-between bg-base boxShadow z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-1 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/" >Home</NavLink></li>
                            <li><NavLink to="/blogs" >Blogs</NavLink></li>
                            <li><NavLink to="/dashboard" >Dashboard</NavLink></li>
                            <li> {user ? <button className="btn btn-ghost" onClick={logout} >Logout</button> : <NavLink to="/login">Login</NavLink>}</li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">ToolzZ</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink className='mx-4' to="/" >Home</NavLink></li>
                        <li><NavLink className='mx-4' to="/blogs" >Blogs</NavLink></li>
                        <li><NavLink className='mx-4' to="/dashboard" >Dashboard</NavLink></li>
                        <li> {user ? <button className="btn btn-ghost" onClick={logout} >Logout</button> : <NavLink to="/login">Login</NavLink>}</li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>

            </div>
        </div>
    );
};

export default Navbar;