import {  useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { HiTrash  } from "react-icons/hi2";
import Swal from "sweetalert2";


const AllUser = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleDeleted = user =>{

    }

    const handleMakeAdmin= user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:'PATCH'

        })

        .then( res => res.json())
        .then (data => {
            console.log(data)
            if(data.modifiedCount){
                refetch()
                Swal.fire(
                    'success',
                    `${user.name} is an admin`,
                    'success'
                  )

            }

        })

    }

    return (
        <div className="w-full ml-4">
            <Helmet>
                <title>All Users</title>
            </Helmet>
         <h3 className="text-3xl font-semibold">Total Users:{users.length}</h3>

         <div class="overflow-x-auto w-full">
  <table class="table table-zebra w-full ">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {

        users.map ((user, index) => <tr key={user.Id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                {
                user.role === 'admin'?'admin':
                <>
                <button onClick={() => handleMakeAdmin(user)} className="btn text-danger bg-red-200"><HiTrash></HiTrash></button>
                </>
                
                }

            </td>
            <td>   <button onClick={() => handleDeleted(user)} className="btn text-danger"><HiTrash></HiTrash></button></td>
          </tr>
     )
    }
     
    
    </tbody>
  </table>
</div>





            
        </div>
    );
};

export default AllUser;