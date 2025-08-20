import Link from 'next/link';
import React from 'react';
import { LuBookOpenText, LuFacebook, LuInstagram, LuYoutube } from "react-icons/lu";

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center  p-10">
        <aside>
            <div>
            <Link href='/' className="flex items-center font-extrabold text-2xl gap-x-1 text-green-600"><LuBookOpenText />EduPath</Link>
            <p>Teaching youths since 2020</p>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href='https://www.instagram.com' target='_blank'>
              <LuInstagram size={25} />
            </a>
            <a href='https://www.youtube.com' target='_blank'>
              <LuYoutube size={25}/>
            </a>
            <a href='https://www.facebook.com' target='_blank'>
              <LuFacebook size={25}/>
            </a>
          </div>
        </nav>
      </footer>
    );
};

export default Footer;