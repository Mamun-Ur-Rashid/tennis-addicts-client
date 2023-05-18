import React, { useContext, useState } from 'react';
import { FaEyeSlash, FaGoogle} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const {createUser} = useContext(AuthContext);
    const [show, setShow] = useState();
    const handleLogin =(event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        createUser(email, password)
        .then(result =>{
            const LoginUser = result.user;
            console.log(LoginUser);
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
                        <img className='h-[350px]' src="" alt="" />
                    </div>
                    <div className=' md:mr-36 shadow border mt-4'>
                        <div className="hero-content flex-col ">
                            <div className="text-center mt-4">
                                <h1 className="text-5xl font-bold">Login</h1>

                            </div>
                            <div className="card  w-full">
                                <div className="card-body">
                                    <form onSubmit={handleLogin}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control ">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>

                                            <div className='form-control relative'> <input type={show ? 'text' : "password"} name='password' placeholder="password" className="input input-bordered" required /></div>
                                            <p onClick={() => setShow(!show)}>
                                                {
                                                    show ? <FaEyeSlash className='absolute top-[170px] right-16'></FaEyeSlash> : <FaEyeSlash className='absolute top-[170px] right-16'></FaEyeSlash>
                                                }
                                            </p>
                                            {/* <label className="label">
                                                <p onClick={handlerForgotPassword} className="label-text-alt link link-hover">Forgot password?</p>
                                            </label> */}
                                        </div>
                                        <div className="form-control mt-6">

                                            <input className="btn btn-primary" type="submit" value="Login" />
                                        </div>
                                    </form>
                                    <button onClick={""} className="border-emerald-400 border-2 p-2 rounded-lg my-3 ">
                                        <small className='text-lg inline-flex items-center gap-2'><FaGoogle className='text-neutral-600'></FaGoogle>Google SignIn </small>
                                    </button>
                                    <p className='text-center'>Have an account? <Link to="/register" className='text-red-500' >Please Register</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;