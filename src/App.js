import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Offers from "./pages/Offers"
import Profile from "./pages/Profile"
import SingUp from "./pages/SignUp"
import SingIn from "./pages/SignIn"
import PrivateRouter from "./components/PrivateRouter";
import ForgotPassword from "./pages/ForgotPassword"
import Header from "./components/Header";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
     <>
         <Router>
             <Header/>
             <Routes>
                 <Route path ="/" element={<Home/>}></Route>
                 <Route path ="/profile" element={<Profile/>}></Route>
                 <Route path="/profile" element={<PrivateRouter/>}></Route>
                 <Route path ="/sign-in" element={<SingIn/>}></Route>
                 <Route path ="/sign-up" element={<SingUp/>}></Route>
                 <Route path ="/forgot-password" element={<ForgotPassword/>}></Route>
                 <Route path ="/offers" element={<Offers/>}></Route>
             </Routes>
         </Router>
         <ToastContainer
             position="top-right"
             autoClose={5000}
             hideProgressBar={false}
             newestOnTop={false}
             closeOnClick
             rtl={false}
             pauseOnFocusLoss
             draggable
             pauseOnHover
             theme="light"
         />
         {/* Same as */}
         <ToastContainer />
     </>
  );
}

export default App;
