import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, photoUrl, name);

        createUser(email, password)
        .then(result =>{
            const loginUser = result.user;
            updateProfile(loginUser, {
                displayName: name,
                photoURL: photoUrl
            })
            .then(()=>{
                alert("Successfully Updated Profile!!");
            })
            .catch(error => {
                console.log(error);
            })
            console.log(loginUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className="  bg-base-200 mt-4 ">
                <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-16'>
                    <div className='h-[500px] md:pl-36 flex justify-center items-center'>
                        <img className='h-[350px]' src={""} alt="" />
                    </div>
                    <div className=' md:mr-36 shadow border mt-4'>
                        <div className="hero-content flex-col ">
                            <div className="text-center mt-4">
                                <h1 className="text-5xl font-bold">Please Register</h1>

                            </div>
                            <div className="card  w-full">
                                <div className="card-body">
                                    <form onSubmit={handleSignUp}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">PhotoUrl</span>
                                            </label>
                                            <input type="url" name='photo' placeholder="Photo url" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control mt-6">

                                            <input className="btn btn-primary" type="submit" value="Register" />
                                        </div>
                                    </form>
                                    <p className='text-center mt-4'>Already have an account? <Link to="/login" className='text-red-500' >Login</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;