import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import logo from '../../assets/tennis-player.png'

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handlerLogOut = () => {
        logOut()
        .then(() =>{
        })
        .catch(error =>{
            console.log(error);
        })
    }
    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allToys'>All Toys</NavLink></li>
        <li><NavLink to='/blog'>Blogs</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>
        {
            user? <>
                
                <li><NavLink to='/myToys'>My Toys</NavLink></li>
                <li><NavLink to='/addAToy'>Add A Toy</NavLink></li>
                <div className="tooltip tooltip-bottom inline-flex" data-tip={user?.displayName}>
                <img className=' w-14 h-14  rounded-full border-2 ml-2' src={user.photoURL} alt="" />
                </div>
                <li><Link to='/login' onClick={handlerLogOut}>Log Out</Link></li> 
            </>
                : <li><NavLink to='/login'>LogIn</NavLink></li>
        }
    </>
    return (
        <div className='bg-[#7FA0CC]'>
            <div className="navbar   h-14">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-3xl inline-flex gap-2 font-semibold text-[#1655a7]">
                        <img className='h-12' src={logo} alt="" /> TennisAddicts
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;