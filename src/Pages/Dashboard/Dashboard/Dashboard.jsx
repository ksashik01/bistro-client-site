import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt,FaHome } from 'react-icons/fa';
import { BsMenuDown } from "react-icons/bs";



const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 ">
            {/* <!-- Sidebar content here --> */}
                <li><NavLink to="home"><FaHome></FaHome>User Home</NavLink></li>
                <li><NavLink to="dashboard/cart"><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                <li><NavLink to="dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>
                <li><NavLink to="dashboard/reservation"><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink></li>
                <div className="divider"></div>
                <li><NavLink><FaHome></FaHome>Home</NavLink></li>
                <li><NavLink to="/menu"> <FaWallet></FaWallet> Our Menu</NavLink></li>
        <li><NavLink to="/order/salad"><BsMenuDown></BsMenuDown>Our Order</NavLink></li>
          </ul>
       
        </div>
      </div>
    );
};

export default Dashboard;