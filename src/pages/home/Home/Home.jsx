import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from '../../../hook/useTitle';


const Home = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("tass")
    const [images, setImages] = useState([])
    AOS.init();
    useTitle("Home");
    useEffect(() => {
        fetch(`https://tennis-addicts-server.vercel.app/allToys/${activeTab}`)
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
            {/* slider */}
            <section>

            </section>
            {/* gallery section */}
            <section className='my-10 bg-[#BFD3EF] scroll-m-2 md:p-8 md:w-3/4 mx-auto'>
                <h2 className='text-center text-3xl font-bold mb-10'>Gallery of Tennis Addicts</h2>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  '>
                    {
                        images?.map((image, index) => <div key={index} >
                            <div className='card w-full h-72 bg-base-100 shadow-xl' data-aos="fade-up" data-aos-delay="400"
                                data-aos-duration="700" data-aos-offset="200"
                                >
                                <figure><img className='w-48 pt-2 object-center ' src={image.img1} alt="Shoes" /></figure>
                                <div className="card-body">
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </section>
            {/* category by shop section */}
            <div className='my-6 bg-[#BFD3EE] sm:p-2 md:p-10'>
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
                                    <div className="card lg:card-side bg-base-100 shadow-xl p-5 flex justify-between"
                                        data-aos="fade-up" data-aos-delay="400"
                                        data-aos-duration="700" data-aos-offset="200">
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
            {/* upcoming products */}
            <section className='my-10 bg-slate-400  sm:p-0 md:p-10'>
                <h2 className='text-center text-4xl font-bold mb-8 '>UpComing Products</h2>
                <div className='grid md:grid-cols-3 gap-4'>
                    <div className="card card-side w-96  bg-lime-300 ">
                        <figure><img src="https://i.ibb.co/x6msP3N/latest4.jpg" alt="car!" /></figure>
                        <div className="card-body ml-4">
                            <h2 className="card-title">Lacoste</h2>
                            <p>Price: 2000 BDT</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline hover:bg-[#BFD3EE]">View Details!</button>
                            </div>
                        </div>
                    </div>

                    <div className="card card-side w-96  bg-lime-300">
                        <figure><img src="https://i.ibb.co/NZ6CJpV/latest1.jpg" alt="car!" /></figure>
                        <div className="card-body ml-4">
                            <h2 className="card-title">Lacoste</h2>
                            <p>Price: 2000 BDT</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline hover:bg-[#BFD3EE]">View Details!</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-side w-96  bg-lime-300">
                        <figure><img src="https://i.ibb.co/7zYKxNR/latest2.jpg" alt="car!" /></figure>
                        <div className="card-body ml-4">
                            <h2 className="card-title">Lacoste</h2>
                            <p>Price: 2000 BDT</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline hover:bg-[#BFD3EE]">View Details!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* service section */}
            <section className='my-14'>
                <h2 className='text-center text-4xl font-bold mb-10 '>Our Services </h2>
                <div className='grid md:grid-cols-4 gap-4 mb-5 '>
                    <div className='border-r-2 p-2 space-y-2'>
                        <img className='' src="https://i.ibb.co/26n3q3L/delivery-1.png" alt="" />
                        <h4 className='text-2xl font-semibold'>Free Shipping</h4>
                        <p>Convenient, affordable shipping for your online orders. Don't miss out on savings!</p>
                    </div>
                    <div className='border-r-2 p-2 space-y-2'>
                        <img className='' src="https://i.ibb.co/w7M8rzF/parcel-return.png" alt="" />
                        <h4 className='text-2xl font-semibold'>Returns Policy</h4>
                        <p>Satisfaction guaranteed: Easy returns and hassle-free refunds for your peace of mind.</p>
                    </div>
                    <div className='border-r-2 p-2 space-y-2'>
                        <img className='' src="https://i.ibb.co/bryQ3Mn/gift-box-1.png" alt="" />
                        <h4 className='text-2xl font-semibold'>Gift Cards</h4>
                        <p>Perfect present: Give the gift of choice with our versatile and stylish gift cards.</p>
                    </div>
                    <div className='p-2 space-y-2'>
                        <img className='' src="https://i.ibb.co/ygDsbnn/star-badge-1.png" alt="" />
                        <h4 className='text-2xl font-semibold'>Best Quality</h4>
                        <p>Experience excellence with our products, crafted to deliver the best</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;