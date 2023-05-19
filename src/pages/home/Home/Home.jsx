import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';



const Home = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("tass")
    const [images, setImages] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/allToys/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [activeTab])

    const handleTabSelect = (tabName) => {
        setActiveTab(tabName);
    };

    // react toast
    const notify = () => toast("You have to log in first to view details");

    useEffect(() => {
        fetch('gallery.json')
            .then(res => res.json())
            .then(result => {
                setImages(result);
            })
    }, [])

    return (
        <div className='mt-10'>
            <div>
                {/* banner Section */}
                <div className="carousel">
                    <div id="slide1" className="carousel-item relative w-full h-[500px]">
                        <img src="https://i.ibb.co/cgwTCMF/cover6.png" className="w-full" />
                        <div className="absolute h-full left-0 right-0 rounded-2xl flex items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                            <div className='text-white space-y-7 pl-28 w-1/3 '>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-3xl font-bold">Start selling with <br /> Shopify today</h1>
                                        <p className="mb-5">Try Shopify for free, and explore all the tools and services you need to start, run, and grow your business.</p>
                                        <button className="btn btn-primary">Get Started</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full h-[500px]">
                        <img src="https://i.ibb.co/y6n9b2t/cover8.webp" className="w-full" />
                        <div className="absolute h-full left-0 right-0 rounded-2xl flex items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                            <div className='text-white space-y-7 pl-28 w-1/3 '>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-3xl font-bold">Start selling with <br /> Shopify today</h1>
                                        <p className="mb-5">Try Shopify for free, and explore all the tools and services you need to start, run, and grow your business.</p>
                                        <button className="btn btn-primary">Get Started</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full h-[500px]">
                        <img src="https://i.ibb.co/4mG3thj/c1.jpg" className="w-full" />
                        <div className="absolute h-full left-0 right-0 rounded-2xl flex items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                            <div className='text-white space-y-7 pl-28 w-1/3 '>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-3xl font-bold">Start selling with <br /> Shopify today</h1>
                                        <p className="mb-5">Try Shopify for free, and explore all the tools and services you need to start, run, and grow your business.</p>
                                        <button className="btn btn-primary">Get Started</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full h-[500px]">
                        <img src="https://i.ibb.co/SmhJKf9/cover5.jpg" className="w-full" />
                        <div className="absolute h-full left-0 right-0 rounded-2xl flex items-center bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                            <div className='text-white space-y-7 pl-28 w-1/3 '>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-3xl font-bold">Start selling with <br /> Shopify today</h1>
                                        <p className="mb-5">Try Shopify for free, and explore all the tools and services you need to start, run, and grow your business.</p>
                                        <button className="btn btn-primary">Get Started</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* gallary section */}
            <section className='my-10 bg-[#BFD3EF] p-8 w-3/4 mx-auto'>
                <h2 className='text-center text-3xl font-bold mb-10'>Gallery of Tennis Addicts</h2>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        images?.map((image, index) => <div key={index}>
                            <div className="card w-56 h-72 bg-base-100 shadow-xl ">
                                <figure><img className='w-full object-cover ' src={image.img1} alt="Shoes" /></figure>
                                <div className="card-body">
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </section>
            {/* category by shop section */}
            <div className='my-6 bg-[#BFD3EE] p-10'>
                <h1 className='text-center text-5xl font-bold my-4 mb-8'>Shop by Categories</h1>
                <Tabs className="p-2">
                    <TabList className='text-center'>
                        <Tab
                            onClick={() => handleTabSelect("Tennis Rackets")}
                            className={`tab tab2  ${activeTab == "Tennis Rackets" ? "bg-black text-white" : "bg-slate-600 text-white border-2"
                                }`}>
                            Tennis Rackets
                        </Tab>
                        <Tab
                            onClick={() => handleTabSelect("Tennis Balls")}
                            className={`tab tab2  ${activeTab == "Tennis Balls" ? "bg-black text-white" : "bg-slate-600 text-white border-2"
                                }`}>
                            Tennis Balls
                        </Tab>
                        <Tab
                            onClick={() => handleTabSelect("Tennis Accessories")}
                            className={`tab tab2  ${activeTab == "Tennis Accessories" ? "bg-black text-white" : "bg-slate-600 text-white border-2 "
                                }`}>
                            Tennis Accessories
                        </Tab>
                        <div className='grid md:grid-cols-2 gap-4 mt-10'>
                            {
                                toys.map(toy => <div key={toy._id}>
                                    <div className="card lg:card-side bg-base-100 shadow-xl p-5 flex justify-between">
                                        <div><figure><img className='h-80 w-full' src={toy.image} alt="Album" /></figure></div>
                                        <div className="items-center mr-8 my-4 space-y-4">
                                            <p className='text-2xl font-bold '>{toy.toyName}</p>
                                            <p className=''>Price: {toy.price}</p>
                                            <div className='flex justify-center items-center gap-4'>
                                                <span>{toy.rating}</span>
                                                <Rating
                                                    style={{ maxWidth: 150 }}
                                                    value={Math.round(toy.rating) || 0} readOnly>
                                                </Rating>

                                            </div>
                                            <div className="">
                                                <div>
                                                    <Link to={`/singleToy/${toy._id}`}><button onClick={notify} className="btn btn-primary mt-10">View Details</button></Link>
                                                    <ToastContainer />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </TabList>
                </Tabs>
            </div>
        </div>
    );
};

export default Home;