import { Route, Routes } from 'react-router-dom';
import Addproduct from './components/Dashboard/Addproduct';
import Dashboard from './components/Dashboard/Dashboard';
import ManageProduct from './components/Dashboard/ManageProduct';
import MyProfile from './components/Dashboard/MyProfile';
import Review from './components/Dashboard/Review';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/Login/RequireAuth';
import SignUp from './components/Login/SignUp';
import Navbar from './components/Navbar/Navbar';

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
        </Route>
        <Route path='/login' element={ <Login></Login> }></Route>
        <Route path='/signup' element={ <SignUp></SignUp> }></Route>
      </Routes>
    </div>
  );
}

export default App;
