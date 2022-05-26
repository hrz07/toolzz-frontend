import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs/Blogs';
import AddAdmin from './components/Dashboard/AddAdmin';
import Addproduct from './components/Dashboard/Addproduct';
import Dashboard from './components/Dashboard/Dashboard';
import ManageOrders from './components/Dashboard/ManageOrders';
import ManageProduct from './components/Dashboard/ManageProduct';
import Myorders from './components/Dashboard/Myorders';
import MyProfile from './components/Dashboard/MyProfile';
import Review from './components/Dashboard/Review';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAdmin from './components/Login/RequireAdmin';
import RequireAuth from './components/Login/RequireAuth';
import SignUp from './components/Login/SignUp';
import Navbar from './components/Navbar/Navbar';
import Notfound from './components/Notfound/Notfound';
import Portfolio from './components/Portfolio/Portfolio';
import Purchage from './components/Purchage/Purchage';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={ <Home></Home> }></Route>
        <Route path='/dashboard' element={<RequireAuth> <Dashboard></Dashboard></RequireAuth>}>
          <Route path='myprofile' element={ <MyProfile></MyProfile> } ></Route>
          <Route path='addproduct' element={ <Addproduct></Addproduct> } ></Route>
          <Route path='manageproduct' element={ <ManageProduct></ManageProduct> } ></Route>
          <Route path='addreview' element={ <Review></Review> } ></Route>
          <Route path='manageorder' element={ <ManageOrders></ManageOrders> } ></Route>
          <Route path='addadmin' element={  <RequireAdmin> <AddAdmin></AddAdmin> </RequireAdmin>   } ></Route>
          <Route path='myorders' element={  <Myorders></Myorders>   } ></Route>
        </Route>
        <Route path='/login' element={ <Login></Login> }></Route>
        <Route path='/portfolio' element={ <Portfolio></Portfolio> }></Route>
        <Route path='/purchase/:id' element={ <RequireAuth> <Purchage></Purchage> </RequireAuth> }></Route>
        <Route path='/signup' element={ <SignUp></SignUp> }></Route>
        <Route path='/blogs' element={ <Blogs></Blogs> }></Route>
        <Route path='*' element={ <Notfound></Notfound> }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
