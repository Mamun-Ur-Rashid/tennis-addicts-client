import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const toy = useLoaderData();
    // console.log(toy);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Update it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${toy?._id}`,{
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body:JSON.stringify(data)
                })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    if(result.modifiedCount>0){
                        Swal.fire(
                            'Updated!',
                            'Your Toy has been Updated Successfully!!',
                            'success'
                          )
                    }
                })
                .catch(error => {
                    console.log(error);
                })
            }
          })
    };

    return (
        <div className='w-3/4 mx-auto shadow-2xl bg-slate-100 p-7 rounded-2xl my-14'>
            <h3 className='text-indigo-300 text-center text-3xl my-4 underline'>Update A Toy</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="">Toy Name</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg  border-slate-400 mt-2'  {...register("toyName")} required placeholder='Toy name' type='text' defaultValue={toy?.toyName} />
                    </div>
                    <div>
                        <label htmlFor="">Seller Email</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg  border-slate-400 mt-2'  {...register("sellerEmail")} required placeholder='Seller email' type='email' defaultValue={toy?.sellerEmail} />
                    </div>
                    <div>
                        <label htmlFor="">Seller Name</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg  border-slate-400 mt-2'  {...register("sellerName")} required placeholder='Seller name'  type='text' defaultValue={toy?.sellerName} />
                    </div>
                    <div>
                        <label htmlFor="">Toy Image</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg  border-slate-400 mt-2'  {...register("image")} required placeholder='Image url' type='text' defaultValue={toy?.image} />
                    </div>
                    <div>
                        <label htmlFor="">Price</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg  border-slate-400 mt-2'  {...register("price", { required: true })} required placeholder='price' type='number' defaultValue={toy?.price} />
                    </div>
                    <div>
                        <label htmlFor="">Rating</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg  border-slate-400 mt-2' 
                            {...register("rating", { required: true })} placeholder='rating' type='' defaultValue={toy?.rating} />
                    </div>
                    <div>
                        <label htmlFor="">Available Quantity</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg  border-slate-400 mt-2' 
                            {...register("quantity", { required: true })} required placeholder='quantity' type='number'  defaultValue={toy?.quantity}/>
                    </div>
                    <div>
                        <label htmlFor="">Category</label><br />
                        <select className="text-input border-2 p-2 rounded-lg  w-full mt-2 border-slate-400" {...register("category")}>
                            <option value="Tennis Rackets">Tennis Rackets</option>
                            <option value="Tennis Balls">Tennis Balls</option>
                            <option value="Tennis Accessories">Tennis Accessories</option>
                        </select>
                    </div>
                </div>
                <div>
                        <label htmlFor="">Description</label>
                        <textarea className='form-control w-full h-24 border-2 p-2 rounded-lg  border-slate-400 mt-2' {...register("description")} required placeholder='description' type='text' defaultValue={toy?.description} />
                    </div>
                <input type="submit" className='border-2 p-2 rounded-lg w-full my-5 border-slate-400 text-white bg-slate-400' />
            </form>
        </div>
    );
};

export default UpdateToy;