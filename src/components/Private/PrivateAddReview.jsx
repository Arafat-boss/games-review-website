import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../RafComponents/Loading";
import { Navigate, useLocation } from "react-router-dom";


const PrivateAddReview = ({children}) => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation()
    // console.log(location);
    if(loading){
        return <Loading></Loading>
      }
      if(user && user?.email){
        return children;
        // setUser()
      }
    
    
      return <div><Navigate state={location.pathname} to="/login"></Navigate></div>;
};

export default PrivateAddReview;