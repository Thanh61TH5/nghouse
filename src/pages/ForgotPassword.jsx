import {useState} from "react";
import {Link} from "react-router-dom";
import OAuth from "../components/OAuth";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";


export default function ForgotPassword(){
    const[email, setEmail] = useState("");
    function onChange(e){
        setEmail(e.target.value);}

    async function onSubmit(e) {
        e.preventDefault()

        try{
            const auth = getAuth()
            await sendPasswordResetEmail(auth, email);
            toast.success("Email was send");
        }catch (error){
            toast.error("Could not send password");
        }
    }
    return (
        <section>
            <h1 className={"text-3xl text-center mt-6 font-bold"}>Forgot Password</h1>
            <div className={"flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto"}>
                <div className={"md:w-[67%] lg:w-[50%] mb-12 md:mb-6"}>
                    <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="key" className={"w-full rounded-2xl"}/>
                </div>
                <div className={"w-full md:w-[67%] lg:w-[40%] mb-12 lg:ml-20"}>
                    < form onSubmit={onSubmit} >
                        <input className={" w-full px-4 py-2 mb-5 text-xl text-gray-700 border border-gray-300 bg-white rounded transition ease-in-out"} type="email" id ="email" value={email} onChange={onChange} placeholder="Email"/>
                        <button className="w-full mb-4 bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800" type={ "submit"}>Send reset password</button>
                        <ToastContainer />
                        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                            <p className={"mb-6" }>Do you have a account?
                                <Link className={"mb-6 text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"} to="/sign-up">Register</Link>
                            </p>
                            <p className={"text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out ml-1"}>
                                <Link to="/sign-in">Sign in instead?</Link>
                            </p>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    )
}