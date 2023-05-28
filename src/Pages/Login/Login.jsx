// import { useRef, useState } from 'react';
import { useContext } from 'react';
// import { useEffect } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';


const Login = () => {
    // const captchRef = useRef(null);
    // const [disabled, setDisable] = useState(true);
    const {signIn} = useContext(AuthContext)

    // useEffect(() =>{
    //    loadCaptchaEnginge(6); 

    // })




const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then (result =>{
      const user = result.user;
      console.log(user)
    })
}
// const handleValidatedCaptch = () =>{
//     const user_captcha_Value = captchRef.current.value;
//     console.log(user_captcha_Value)
//     if(validateCaptcha (user_captcha_Value)){
//             setDisable(false)
//     }
//     else{
//             setDisable(true)
//     }

// }




    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col md:flex ">
    <div className="text-center lg:text-left">
   
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email"placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>


        <div className="form-control">
          <label className="label">
          {/* <LoadCanvasTemplate /> */}

          </label>
          {/* ref={captchRef} */}
          <input  type="text" name="captcha" placeholder="Type Captch" className="input input-bordered" />
          {/* onClick={handleValidatedCaptch} */}
          <button  className='btn btn-outline btn-xs'>Validated</button>
         
        </div>
        {/* disabled={disabled} */}
        <div className="form-control mt-6">
            <input  className="btn btn-danger" type="submit" value="Login" />
        </div>
      </form>
     <p>New Here?  <Link to="/signup">
     <button className='btn btn-link'>Create a New Account</button>
      </Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;