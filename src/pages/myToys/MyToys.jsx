import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data);
            })
    }, [])
    return (
        <div className='container my-16'>
            <h1 className='text-center text-3xl font-bold'>MY Toys</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Toy Name</th>
                            <th>Picture</th>
                            <th>Seller Name</th>
                            <th>Seller Email</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                            <th>Action</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys?.map((toy, index) =>(  
                            <tr>
                                <td>{index + 1}</td>
                                <td>{toy.toyName}</td>
                                <td><img className='h-14 w-24' src={toy.image} alt="" /></td>
                                <td>{toy.sellerName}</td>
                                <td>{toy.sellerEmail}</td>
                                <td>{toy.category}</td>
                                <td>{toy.rating}</td>
                                <td>{toy.quantity}</td>
                                <td><button>Update</button></td>
                                <td><button>Delete</button></td>
                                <td>{toy.description}</td>
                            </tr>))
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;