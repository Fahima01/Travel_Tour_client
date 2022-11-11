import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../../assets/log.png'
import { AuthContext } from '../../../../../context/Authprovider';
import { FaUser } from 'react-icons/fa';


const Header = () => {

    const { user, logOut, login } = useContext(AuthContext);

    const menuItems = <>
        <li> <Link to='/'> Home </Link> </li>
        <li> <Link to='/packages'> Tour Packeges </Link> </li>
        <li> <Link to='/blog'> Blog </Link> </li>

    </>

    return (
        <div>
            <div className="navbar bg-zinc-100  shadow-lg shadow-cyan-300/40 z-40    ">
                <div className="navbar-start w-96 mx-auto ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box font-bold w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link> <img className='w-52' src={logo} alt="" />  </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end gap-3  w-96 mx-auto">
                    {
                        user?.email ?
                            <>
                                <Link to='/signup'>  <button onClick={logOut} className="btn bg-pink-500 border-0 rounded-full px-8 py-2 ">logout</button> </Link>

                                <div className="dropdown dropdown-hover">
                                    <label tabIndex={0} className="m-1">

                                        <label tabIndex={0} className="avatar  w-full"> {user?.photoURL ?
                                            <div className="avatar w-10">
                                                <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src={user?.photoURL} alt='' />
                                                </div>
                                            </div>
                                            :
                                            <FaUser></FaUser>
                                        }</label>

                                    </label>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>{user?.displayName}</a></li>
                                        <Link to='/reviews'> <li><a>My Reviews</a></li></Link>
                                    </ul>
                                </div>


                            </>
                            :
                            <Link to='/login'>  <button className="btn btn-accent rounded-full px-8 py-2 mr-4">Login</button> </Link>

                    }
                </div>
            </div>

        </div>
    );
};

export default Header;