import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


     const handleGoogleSignIn =() =>[
        googleSignIn()
        .then (result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            
            navigate(from , {replace:true});

        })
     ]


    return (
        <div>
            <div className="divider"></div>

            <div className="text-center py-4">
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">

<FaGoogle></FaGoogle>

</button>
    
            </div>
   
        </div>
    );
};


export default SocialLogin;