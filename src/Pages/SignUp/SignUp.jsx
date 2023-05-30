import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'



const SignUp = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {createUser, updatedUserprofile} = useContext(AuthContext);
    const navigate = useNavigate();

const onSubmit = data =>{
    console.log(data)


    createUser(data.email, data.password)
    .then (result => {
        const loggeduser = result.user;
        console.log(loggeduser);
        updatedUserprofile(data.name, data.photoURL)
        .then(() =>{

          console.log('User Profile info Updated')
          reset();
     
          
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'User created successfully',
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/');


        })
        .catch(error => console.log(error))
    })
}

    return (
      <>

      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up Now</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name")} name="name" placeholder="Name" className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
       

              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" {...register("email", { required: true },)} name="email" placeholder="Email" className="input input-bordered" />
                {errors.email && <span className="text-red-500">This field is required</span>}

                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
               
              </div>
            </form>
            <p>Already have an Account? <Link className="btn btn-link" to="/login">Login</Link></p>
          </div>
        </div>
      </div>
      
      
      </>
    );
};

export default SignUp;


// Formik important site--------