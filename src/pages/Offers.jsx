import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Offers(){
    return (
        <div>
            <button className={"bg-blue-800"} onClick={() => toast("Hello World")}>Show Toast</button>
            <ToastContainer />
        </div>

    )
}


