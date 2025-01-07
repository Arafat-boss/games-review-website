import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Lottie from "lottie-react";
import loginAnimation from "../../animation/loginAnimation.json"
import { Helmet } from "react-helmet";


const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginUser, googleProvider } = useContext(AuthContext);

  const handelLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    const user = { email, password };
    console.log(user);

    //firebase Auth
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  //google auth
  const handelGoogle = () =>{
    googleProvider()
      .then((res) => {
        navigate(location?.state ? location.state : "/");
        // console.log(res.user);
      })
      .catch((err) => console.log(err.message));
  }



  return (
    <div>
       <Helmet>
        <title>Login</title>
    </Helmet>
      {/* <Navbar></Navbar> */}
      <form onSubmit={handelLogin} className="mt-10 rounded-lg border-none max-w-xl mx-auto border-2 p-24 bg-[#f4e2e9] text-white shadow-xl">
      <h1 className="text-3xl font-bold text-center text-purple-500 mx-auto">
        Login now!
      </h1>
      <Lottie
          animationData={loginAnimation}
          loop={true}
          className="w-52 h-32 mx-auto"
        />
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            name="password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_password"
            className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>

        <div className="lg:flex mb:flex">
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            mr-4 mt-2
            "
          >
            Log in
          </button>
          <button
            onClick={handelGoogle}
            type="submit"
            className="mt-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Google
          </button>
        </div>
        <p className="text-sm mt-4 text-black">
          You have no account no problem!{" "}
          <Link to="/register">
            <span className="text-blue-600 underline font-bold">
              Register Now
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
