import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hook/useTitle';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    useTitle("All Toys");
    // console.log(toys)
    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setToys(data))
            .catch(error => {
                console.log(error);
            })
    }, [])
    return (
        <div className='my-14'>
            <h1 className='text-center text-3xl font-bold my-5'>All Toys</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map((toy, index )=> <tr key={toy._id}>
                                <td>{index + 1}</td>
                                <td>{toy.sellerName}</td>
                                <td>{toy.toyName}</td>
                                <td>{toy.price}</td>
                                <td>{toy.category}</td>
                                <td>{toy.quantity}</td>
                                <td><Link to={`/viewDetails/${toy._id}`}><button className='btn btn-accent'>View Details</button></Link></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;