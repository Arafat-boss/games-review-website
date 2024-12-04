import { NavLink } from "react-router-dom";
import errorImg from "../../assets/error.jpg"

const ErrorPages = () => {
    return (
        <div className="flex justify-center items-center mt-44 cursor-pointer">
            <div>
                <h1 className="text-6xl mb-5">4 <span className="underline font-bold text-purple-800">0</span> 4 - e r r o r</h1>
                <h3 className="text-3xl font-bold">PAGE NOT FOUND!</h3>
                <p className="mb-5 underline text-purple-500">Your search has ventured beyond the known universe.</p>
               <NavLink to='/'> <button className="btn border-purple-800 rounded-3xl">Back To Home</button></NavLink>
            </div>
            <div>
                <img className="w-96" src={errorImg} alt="" />
            </div>
        </div>
    );
};

export default ErrorPages;