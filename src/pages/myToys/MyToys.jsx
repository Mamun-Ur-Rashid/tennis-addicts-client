import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hook/useTitle';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    useTitle("My Toys");
    console.log(toys)
    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                 console.log(data);
                setToys(data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [user])

    // search by toy name function
    const handleSearch = () => {
        fetch(`http://localhost:5000/toySearchByName/${searchText}`)
        .then(res => res.json())
        .then( data => setToys(data))
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== id);
                            setToys(remaining);
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        })
    }
    return (
        <div className='container my-16'>
            <h1 className='text-center text-3xl font-bold my-5'>My Toys</h1>
            <div className='flex justify-center mb-10'>
                <div className="form-control">
                    <div className="input-group">
                        <input
                        onChange={(e) => setSearchText(e.target.value)} 
                        type="text" placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
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
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                            <th>Action</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys?.map((toy, index) => (
                                <tr key={toy._id}>
                                    <td>{index + 1}</td>
                                    <td>{toy.toyName}</td>
                                    <td><img className='h-14 w-24' src={toy.image} alt="" /></td>
                                    <td>{toy.sellerName}</td>
                                    <td>{toy.sellerEmail}</td>
                                    <td>{toy.category}</td>
                                    <td>{toy.price}</td>
                                    <td> <div className='flex justify-center items-center gap-4'>
                                                {/* <span>{toy.rating}</span> */}
                                                <Rating
                                                    style={{ maxWidth: 150 }}
                                                    value={Math.round(toy.rating) || 0} readOnly>
                                                </Rating>

                                            </div></td>
                                    <td>{toy.quantity}</td>
                                    <td><Link to={`/updateToy/${toy._id}`}><button className='btn btn-outline'>Update</button></Link></td>
                                    <td><button onClick={() => handleDelete(toy._id)} className='btn btn-outline'>Delete</button></td>
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