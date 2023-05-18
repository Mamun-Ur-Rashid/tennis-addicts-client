import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setToys(data);
            })
    }, [user])

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
                    if(data.deletedCount>0){
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
            <h1 className='text-center text-3xl font-bold my-5'>MY Toys</h1>
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
                                    <td>{toy.rating}</td>
                                    <td>{toy.quantity}</td>
                                    <td><Link to={`/updateToy/${toy._id}`}><button>Update</button></Link></td>
                                    <td><button onClick={() => handleDelete(toy._id)}>Delete</button></td>
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