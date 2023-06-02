import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt,FaHome, FaUtensils,FaBook } from 'react-icons/fa';
import { BsMenuDown } from "react-icons/bs";
import useCart from "../../../Hooks/UseCart";



const Dashboard = () => {
  const [cart] = useCart();
  const isAdmin = true;
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"></label>
        
        </div> 
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 ">
            {/* <!-- Sidebar content here --> */}
          {
            isAdmin?
            <>
            <li><NavLink to="home"><FaHome></FaHome>Admin</NavLink></li>
              
                <li><NavLink to="dashboard/reservation"><FaUtensils></FaUtensils>Add Items</NavLink></li>
                <li><NavLink to="/dashboard/reservation"><FaUtensils></FaUtensils>Manage Items</NavLink></li>
                <li><NavLink to="/dashboard/history"><FaBook></FaBook>Manage Bookins</NavLink></li>
                <li><NavLink to="/dashboard/allusers"><FaBook></FaBook>All Users</NavLink></li>
                <p>Hello</p>
            
            </>
            :
            
            <>
            <li><NavLink to="home"><FaHome></FaHome>User Home</NavLink></li>
                <li><NavLink to="dashboard/cart"><FaShoppingCart></FaShoppingCart>My Cart
                <span className="badge badge-secondary">+{cart?.length || 0}</span>
                
                </NavLink></li>
                <li><NavLink to="dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>
                <li><NavLink to="dashboard/reservation"><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>
                <div className="divider"></div>
                <li><NavLink><FaHome></FaHome>Home</NavLink></li>
                <li><NavLink to="/menu"> <FaWallet></FaWallet> Our Menu</NavLink></li>
        <li><NavLink to="/order/salad"><BsMenuDown></BsMenuDown>Our Order</NavLink></li>

            </>
          }



                
          
          </ul>
       
        </div>
      </div>
    );
};

export default Dashboard;