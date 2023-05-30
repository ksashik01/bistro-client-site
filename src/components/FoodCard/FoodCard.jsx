import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/UseCart";


const FoodCard = ({item}) => {
    const {name, image,price,recipe,_id} = item;
    const {user} = useContext(AuthContext);
    const [,refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddtoCart = item =>{
        console.log(item);
        if(user && user.email){
          const orderItem = {menuItem:_id, name, image,price,email:user.email }
          fetch('http://localhost:5000/carts',{
          method: 'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(orderItem)

          })
          .then (res => res.json())
          .then (data => {
            if (data.insertedId){
              refetch(); //refecth cart to aupdate the number

              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Item Add Succesfully',
                showConfirmButton: false,
                timer: 1500
              })

            }


          })
        }

        else{

          Swal.fire({
            title: 'Please Login to order the Food?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login Now!'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state:{from: location} })
            }
          })

        }
    }


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button onClick={() => handleAddtoCart(item)} className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;