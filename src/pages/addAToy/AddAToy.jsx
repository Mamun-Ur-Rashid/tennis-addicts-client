import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../hook/useTitle';

const AddAToy = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    useTitle("Add a Toy");

    const onSubmit = (data) => {
        fetch('https://tennis-addicts-server.vercel.app/post-Toys', {
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
           if(result.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Successfully added a Toy',
                icon: 'success',
                confirmButtonText: 'Cool'
            
              })
           }
        })
        .catch(error => { 
            console.log(error);
        })
        console.log(data)
    };

    return (
        <div className='w-3/4 mx-auto shadow-2xl bg-slate-100 p-7 rounded-2xl my-14'>
            <h3 className='text-indigo-300 text-center text-3xl my-4 underline'>Added A Toy</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="">Toy Name</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg border-slate-400 mt-2' {...register("toyName")} required placeholder='Toy name' type='text' />
                    </div>
                    <div>
                        <label htmlFor="">Seller Email</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg border-slate-400 mt-2' {...register("sellerEmail")} required placeholder='Seller email' defaultValue={user?.sellerEmail} type='email' />
                    </div>
                    <div>
                        <label htmlFor="">Seller Name</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg border-slate-400 mt-2' {...register("sellerName")} required placeholder='Seller name' defaultValue={user?.sellerName}  type='text' />
                    </div>
                    <div>
                        <label htmlFor="">Toy Image</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg border-slate-400 mt-2' {...register("image")} required placeholder='Image url' type='text' />
                    </div>
                    <div>
                        <label htmlFor="">Price</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg border-slate-400 mt-2' {...register("price", { required: true })} required placeholder='price' type='number' />
                    </div>
                    <div>
                        <label htmlFor="">Rating</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg border-slate-400 mt-2'
                            {...register("rating", { required: true })} placeholder='rating' type='' />
                    </div>
                    <div>
                        <label htmlFor="">Available Quantity</label>
                        <input className='form-control w-full border-2 p-2 rounded-lg border-slate-400 mt-2'
                            {...register("quantity", { required: true })} required placeholder='quantity' type='number' />
                    </div>
                    <div>
                        <label htmlFor="">Category</label><br />
                        <select className="text-input border-2 p-2 rounded-lg w-full mt-2 border-slate-400" {...register("category")}>
                            <option value="Tennis Rackets">Tennis Rackets</option>
                            <option value="Tennis Balls">Tennis Balls</option>
                            <option value="Tennis Accessories">Tennis Accessories</option>
                        </select>
                    </div>
                </div>
                <div>
                        <label htmlFor="">Description</label>
                        <textarea className='form-control w-full h-24 border-2 p-2 rounded-lg border-slate-400 mt-2' {...register("description")} required placeholder='description' type='text' />
                    </div>
                <input type="submit" className='border-2 p-2 rounded-lg w-full my-5 border-slate-400 text-white bg-slate-400' />
            </form>
        </div>
    );
};

export default AddAToy;