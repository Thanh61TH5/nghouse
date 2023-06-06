import {FcGoogle} from "react-icons/fc";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {toast, ToastContainer} from 'react-toastify';

export default function OAuth(){
    async function onGoogleClick() {
        try{
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user
        }
        catch (error){
            toast.error("Could not authorize with Google ")
        }
    }

    return (
        <button onClick={onGoogleClick} n className={"flex items-center justify-center  w-full bg-red-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-red-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-red-800"}> <FcGoogle className={"bg-white text-md  rounded-full mr-2"}/>
            Continue with Google
        </button>
    )
}