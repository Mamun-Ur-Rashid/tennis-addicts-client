import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const SingleToy = () => {
    const toy = useLoaderData();
    const { image, sellerName, sellerEmail, toyName, price, rating, quantity, description } = toy
    return (
        <div className='shadow-2xl bg-base-200 rounded-2xl w-3/4 mx-auto pb-4 my-10'>
            <h1 className='text-center text-4xl font-bold underline pt-6'>{toyName} Details</h1>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='space-y-4 p-6' >
                        <h1 className="text-5xl font-bold">{toyName}</h1>
                        <p className="">Price: {price}</p>
                        <div className='flex justify-start items-center gap-4'>
                            <Rating
                                style={{ maxWidth: 150 }}
                                value={Math.round(toy.rating) || 0} readOnly>
                            </Rating>

                        </div>
                        <p className="">Quantity: {quantity}</p>
                        <p className="">Seller Name: {sellerName}</p>
                        <p className="">Seller Email: {sellerEmail}</p>
                        <p className="">Description: {description}</p>
                    </div>
                </div>
            </div>
            <h2 className='text-2xl text-center mb-5'>Thank you for Viewing!!</h2>
        </div>
    );
};

export default SingleToy;