"use client";
import Link from "next/link";
import { LuBookOpenText } from "react-icons/lu";

const Navbar = () => {
        
     const links = [
    { name: "Home", href: "/" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Dashboard", href: "/dashboard" },
  ];

    return (
        <div className="navbar fixed top-0 left-0 w-full shadow-sm md:px-16 bg-base-100 z-50">

            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rounded" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                     {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                    ))}
                </ul>
                </div>
                <Link href='/' className="flex items-center font-extrabold text-2xl gap-x-1"><LuBookOpenText className="text-green-700" size={35} />Edu<span className="text-green-700">Path</span></Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                 {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
                </ul>
            </div>
            
           <div className="navbar-end relative items-center gap-x-4 md:ml-10">
        
            <Link href="/login"
                className="btn rounded-lg">Sign In
            </Link>
            <Link href="/register"
                className="btn btn-outline rounded-lg hover:bg-green-600">Sign Up
            </Link>
            
            </div>

        </div>
    );
};

export default Navbar;