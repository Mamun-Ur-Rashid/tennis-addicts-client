import React from 'react';
import logo from '../../assets/logotennis.png'
import { FaTwitterSquare, FaInstagramSquare, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='my-10 bg-[#1B1A1A] text-white p-6'>
            <footer className="footer p-10  text-white">
                <div>
                    <img className='h-10' src={logo} alt="" />
                    <p>Tennis Addicts Shop.<br />Providing reliable tech since 2002</p>
                    <p>Gulshan 1212</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Products</a>
                    <a className="link link-hover">Best Tennis Rackets</a>
                    <a className="link link-hover">Online Bye</a>
                    <a className="link link-hover">Good Services</a>
                </div>
                <div>
                    <span className="footer-title">Open/Off <br />Saturday Week end</span>
                    <a className="link link-hover">Sunday  -8am to 10pm</a>
                    <a className="link link-hover">Monday  -8am to 8pm</a>
                    <a className="link link-hover">Tuesday  -8am to 10pm</a>
                    <a className="link link-hover">Wednesday  -10am to 10pm</a>
                    <a className="link link-hover">Thusday  -8am to 11pm</a>
                    <a className="link link-hover">Friday  -8am to 12am</a>

                </div>
                <div>
                    <span className="footer-title">Subscribe <br /> Tennis Addicts</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            <div className="social-links inline-flex items-center mt-4 gap-4 text-2xl">
                                <a href="https://twitter.com/">
                                    <FaTwitterSquare className="mr-2" />
                                </a>
                                <a href="https://www.instagram.com/">
                                    <FaInstagramSquare className="mr-2" />
                                </a>
                                <a href="https://www.m.facebook.com/">
                                    <FaFacebook className="mr-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
            <div>
                <p className='text-center'>Copyright © 2023 - All right reserved by Tennis Addicts</p>
            </div>
        </div>
    );
};

export default Footer;