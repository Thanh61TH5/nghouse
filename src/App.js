import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Offers from "./pages/Offers"
import Profile from "./pages/Profile"
import SingUp from "./pages/SignUp"
import SingIn from "./pages/SignIn"
import ForgotPassword from "./pages/ForgotPassword"
import Header from "./components/Header";
function App() {
  return (
     <>
         <Router>
             <Header/>
             <Routes>
                 <Route path ="/" element={<Home/>}></Route>
                 <Route path ="/profile" element={<Profile/>}></Route>
                 <Route path ="/sign-in" element={<SingIn/>}></Route>
                 <Route path ="/sign-up" element={<SingUp/>}></Route>
                 <Route path ="/forgot-password" element={<ForgotPassword/>}></Route>
                 <Route path ="/offers" element={<Offers/>}></Route>
             </Routes>
         </Router>
     </>
  );
}

export default App;
