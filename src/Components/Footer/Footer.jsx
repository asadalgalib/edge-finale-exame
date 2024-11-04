import React from 'react';

const Footer = () => {
    return (
        <div className='py-12 px-32'>
            <div>
                <h1 className='text-2xl text-center font-bold mb-3'>Gadget Heaven</h1>
                <p className='text-center text-[#09080F99] mb-4'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr />
            <div className="footer text-neutral-content p-10">
                <nav className=''>
                    <h6 className="text-lg font-bold text-[#000]">Services</h6>
                    <a className="link link-hover text-[#09080F99]">Branding</a>
                    <a className="link link-hover text-[#09080F99]">Design</a>
                    <a className="link link-hover text-[#09080F99]">Marketing</a>
                    <a className="link link-hover text-[#09080F99]">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="text-lg font-bold text-[#000]">Company</h6>
                    <a className="link link-hover text-[#09080F99]">About us</a>
                    <a className="link link-hover text-[#09080F99]">Contact</a>
                    <a className="link link-hover text-[#09080F99]">Jobs</a>
                    <a className="link link-hover text-[#09080F99]">Press kit</a>
                </nav>
                <nav>
                    <h6 className="text-lg font-bold text-[#000]">Legal</h6>
                    <a className="link link-hover text-[#09080F99]">Terms of use</a>
                    <a className="link link-hover text-[#09080F99]">Privacy policy</a>
                    <a className="link link-hover text-[#09080F99]">Cookie policy</a>
                </nav>
            </div>
        </div>
    );
};

export default Footer;