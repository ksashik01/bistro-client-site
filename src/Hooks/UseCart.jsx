<<<<<<< HEAD

import { useQuery } from '@tanstack/react-query'

import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

// tanStack Query-----------

const useCart = () =>{
    const {user} =useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure]   = useAxiosSecure();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        // queryFn: async () =>{
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
        //         headers:{
        //             authorization:`bearer ${token}`
        //         }
        //     })
        //     console.log(res)
        //     return res.json();
        // },
        queryFn: async () =>{
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('res from axios', res)

        
            return res.data;
        },
      })

      return [cart, refetch]
}
export default useCart  
=======
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

// tanStack Query-----------

const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );
      console.log(res);
      return res.json();
    },
  });

  return [cart, refetch];
};
export default useCart;
>>>>>>> 469b2ccc99ce8808d6d94fe54cc00563453ba1a7
