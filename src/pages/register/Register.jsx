import React, { useContext, useState } from 'react';
import { Link} from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { RotatingLines } from 'react-loader-spinner';
import useTitle from '../../hook/useTitle';

const Register = () => {
    const {createUser, loading} = useContext(AuthContext);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("")
    useTitle('register');
    if(loading){
        return <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    }
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, photoUrl, name);
        setSuccess("");
        setError("");
        if(!/(?=.*?[A-Z])/.test(password)) {
            setError("Your Password should be at least one Upper case!");
            return;
        }
        else if (!/(?=.*?[a-z])/.test(password)){
            setError("Your password should be at least one Lower Case!!");
            return;
        }
        else if(!/(?=.*?[0-9])/.test(password)){
            setError("Your password should be at least one digit!!");
            return;
        }
        else if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
            setError("Your password should be at least one Special character!!");
            return;
        }
        else if(password.length < 8 ){
            setError("Your password should be at least 8 characters long!!");
            return;
        }

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
            setSuccess("User Successfully create a Account!!")
            Navigate('/login');
            form.reset();
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className="  bg-[#BFD3EE] my-10 ">
                <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-16'>
                    <div className='h-[500px] md:pl-36 flex justify-center items-center'>
                        <img className='h-[350px]' src="https://i.ibb.co/VSjd4JG/login-removebg-preview.png" alt="" />
                    </div>
                    <div className=' md:mr-36 shadow border mt-5'>
                        <div className=" hero-content flex-col ">
                            <div className="text-center mt-4">
                                <h1 className="text-5xl font-bold">Please Register</h1>
                            </div>
                            <div className="card  w-full">
                                <div className="card-body">
                                <p className='text-red-400 text-xl'>{error}</p>
                                <p className='text-success text-xl'>{success}</p>
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