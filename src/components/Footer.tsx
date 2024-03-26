import {
  Contact,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import React from "react";

function Footer() {
  return (
    <>
      {/* <div className=' border-t border-solid border-gray-200 mb-12 mt-32'></div> */}
      <footer className='p-6 py-12  bg-gray-50 mt-12 lg:mt-24'>
        <div className='container grid grid-cols-1 xs:grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3  justify-center '>
          <div className='flex flex-col space-y-4'>
            <div>
              <img src='/Logo.webp' alt='logo' className='mb-4' />
            </div>
            <div className='flex flex-col space-y-2 text-sm text-muted-foreground gap-6'>
              <div className='flex gap-2 items-center'>
                <MapPin />
                184 Main Rd E, St Albans VIC 3021, Australia
              </div>
              <div className='flex gap-2 items-center'>
                <Contact />
                contact@company.com
              </div>
              <div className='flex items-center gap-2'>
                <Phone />
                <p>+001 2233 456</p>
              </div>
              <div className='flex items-center gap-6'>
                <Facebook />
                <Instagram />
                <Linkedin />
                <Twitter />
              </div>
            </div>
          </div>
          <div className='flex flex-col space-y-4'>
            <h2 className='font-semibold mb-4'>Categories</h2>
            <div className='flex flex-col space-y-2 text-sm text-muted-foreground gap-3'>
              <a rel='noopener noreferrer' href='#'>
                Messangers
              </a>
              <a rel='noopener noreferrer' href='#'>
                Travel & Luggage
              </a>
              <a rel='noopener noreferrer' href='#'>
                Backpack
              </a>
              <a rel='noopener noreferrer' href='#'>
                Laptop Bags
              </a>
            </div>
          </div>
          <div className='flex flex-col space-y-4'>
            <h2 className='font-semibold mb-4'>Infomation</h2>
            <div className='flex flex-col space-y-2 text-sm text-muted-foreground gap-3'>
              <a rel='noopener noreferrer' href='#'>
                About Us
              </a>
              <a rel='noopener noreferrer' href='#'>
                Contact Us
              </a>
              <a rel='noopener noreferrer' href='#'>
                Terms & Conditions
              </a>
              <a rel='noopener noreferrer' href='#'>
                Returns & Exchanges
              </a>
              <a rel='noopener noreferrer' href='#'>
                Shipping & Delivery
              </a>
              <a rel='noopener noreferrer' href='#'>
                Privacy Policy
              </a>
            </div>
          </div>
          {/* <div className='flex flex-col space-y-4'>
            <h2 className='font-semibold mb-4'>Useful links</h2>
            <div className='flex flex-col gap-3 space-y-2 text-sm text-muted-foreground'>
              <a rel='noopener noreferrer' href='#'>
                GitHub
              </a>
              <a rel='noopener noreferrer' href='#'>
                Discord
              </a>
              <a rel='noopener noreferrer' href='#'>
                Twitter
              </a>
              <a rel='noopener noreferrer' href='#'>
                YouTube
              </a>
            </div>
          </div> */}
        </div>
        <div className='flex items-center justify-center px-6 pt-12 text-xs text-muted-foreground mt-6'>
          <span className=''>© Copyright 1986. All Rights Reserved.</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
