import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaStar } from "react-icons/fa";
import MyUserReview from "../RafComponents/MyUserReview";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const myUser = useLoaderData();
  const findMyUsers = [...myUser].filter((item) => item.email == user.email);
  console.log(findMyUsers);
  const [deleteUser, setDeleteUser] = useState(findMyUsers)
  console.log(deleteUser);
  return (
    <div>
      {
        findMyUsers.map(findUser => 
        <MyUserReview 
              findUser={findUser}
              deleteUser={deleteUser}
              setDeleteUser={setDeleteUser}
            ></MyUserReview>)
      }
    </div>
  );
};

export default MyReviews;
