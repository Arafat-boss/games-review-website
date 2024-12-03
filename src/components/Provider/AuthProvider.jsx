import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  //google provider
  const provider = new GoogleAuthProvider();

  const googleProvider = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };


  
//email and password
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userUpdateProfile =(updateData)=>{
    setLoading(false)
    return updateProfile(auth.currentUser, updateData)
}


  const signOutUser =()=>{
    setLoading(true)
    return signOut(auth)
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log(currentUser);
        setUser(currentUser)
        setLoading(false)
})
        return () =>{
            unsubscribe();
        }
},[])














  const userInfo = {
    user,
    setUser,
    registerUser,
    loginUser,
    signOutUser,
    userUpdateProfile,
    googleProvider
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
