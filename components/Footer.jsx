import Link from 'next/link';
import React from 'react';
import { LuBookOpenText, LuFacebook, LuInstagram, LuYoutube } from "react-icons/lu";

const Footer = () => {
    return (
      <footer className="footer sm:footer-horizontal bg-white text-black items-center p-4 md:px-16">
      <aside className="flex flex-col items-center">
        <div>
          <Link href='/' className="flex items-center font-extrabold text-2xl gap-x-1"><LuBookOpenText className="text-green-700" size={35} />Edu<span className="text-green-700">Path</span></Link>
        </div> 
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href='https://www.facebook.com' target='_blank'>
          <LuFacebook size={25}/>
        </a>
        <a href='https://www.youtube.com' target='_blank'>
          <LuYoutube size={25}/>
        </a>
        <a href='https://www.instagram.com' target='_blank'>
          <LuInstagram size={25}/>
        </a>
      </nav>
    </footer>
    );
};

export default Footer;