
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
   

    return (
        <div className='mx-2 md:mx-4 lg:mx-12 my-7'>
            <div className='flex mt-4'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-6 z-[1] pt-4 pr-4 shadow bg-base-100 rounded-box w-52">
                                <li className='ml-2'>
                                    <NavLink
                                        to="/"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className='mt-2 ml-2'>
                                    <NavLink
                                        to="/donation"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                        }
                                    >
                                        Donation
                                    </NavLink>
                                </li>
                                <li className='my-2 ml-2'>
                                    <NavLink
                                        to="/statistics"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                        }
                                    >
                                        Statistics
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img className='h-[70%] sm:navbar-end md:navbar-end navbar-center' src={"https://i.ibb.co/Zd8F0DV/Logo.png"} alt="" />
                        </div>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 button-nav">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className='mx-8'>
                                <NavLink
                                    to="/donation" 
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                                >
                                    Donation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/statistics"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                    }
                                >
                                    Statistics
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;