import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/UseCart";
import { HiTrash } from "react-icons/hi2";
import Swal from "sweetalert2";






const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum , item) => item.price + sum, 0)




const handleDeleted = item =>{
 




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
      fetch(`http://localhost:5000/carts/${item._id}`,{
        method:'DELETE'
      })


      .then (res => res.json())
      .then (data =>{
        if (data.deletedCount >0){
          refetch()
          Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
        }
    })
    }
  })
}


    return (
        <div className="mt-40">
            <Helmet>My Cart</Helmet>
            <div className="uppercase font-semibold h-10 flex justify-evenly items-center">
                <h3>Total Items:{cart.length}</h3>
                <h3>Total price: ${total}</h3>
                <button className="btn btn-warning btn-sm">Pay</button>
            </div>








            <div className="overflow-x-auto w-full mt-20">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        cart.map((item, index) =><tr
        key={item._id}
        >
            <td>
             {index+1 }
            </td>
            <td>
             
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
             
            </td>
           
            <td>{item.name}</td>
            <td>Price: ${item.price}</td>
            <td>
              <button onClick={() => handleDeleted(item)} className="btn text-danger"><HiTrash></HiTrash></button>
            </td>
          </tr>
       )
     }
   
    </tbody>
   
  </table>
</div>
        </div>
    );
};


export default MyCart;
