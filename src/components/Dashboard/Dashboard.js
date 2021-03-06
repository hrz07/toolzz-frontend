import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {

  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)

  return (
    <div className="drawer drawer-mobile z-10 boxShadow">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content p-12">
         <h2 className='text-2xl font-bold text-purple-500 mx-auto text-center'>Welcome To Your Dashboard</h2> 

        <Outlet />

        

      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-primary text-base-100">
          { /* <!-- Sidebar content here --> */}
          <li><Link to='/dashboard'>My Dashboard</Link></li>
          <li><Link to='/dashboard/myprofile' >My Profile</Link></li>
          { admin && <li><Link to='/dashboard/addproduct' >Add Product</Link></li>}
          { admin && <li><Link to='/dashboard/manageproduct' >Manage Products</Link></li>}
          {!admin && <li><Link to='/dashboard/addreview' >Add Review</Link></li>}
         { admin && <li><Link to='/dashboard/addadmin' >Add Admin</Link></li>}
         { admin && <li><Link to='/dashboard/manageorder' >Manage Order</Link></li>}
        { !admin && <li><Link to='/dashboard/myorders' >My Orders</Link></li>}
          
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;