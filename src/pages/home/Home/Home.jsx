import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const Home = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("tass")
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
    return (
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
                                            <Link to={`/singleToy/${toy._id}`}><button className="btn btn-primary mt-10">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </TabList>
            </Tabs>
        </div>
    );
};

export default Home;