import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import SingleWatchList from "../RafComponents/SingleWatchList";
import { AuthContext } from "../Provider/AuthProvider";

const WatchList = () => {
  const { user } = useContext(AuthContext);
  const allWatchListData = useLoaderData();
  // console.log(allWatchListData);
  const findWatchUsers = [...allWatchListData].filter(
    (item) => item.email == user.email
  );
  console.log(findWatchUsers);
  return (
    <div className="">
      <thead className="table flex mx-auto">
        <tr>
          <th></th>
          <th className="border">Name</th>
          <th className="border">Email</th>
          <th className="border ml-10">Genres</th>
        </tr>
      </thead>
      {findWatchUsers.map((wList) => (
        <SingleWatchList key={wList._id} wList={wList}></SingleWatchList>
      ))}
    </div>
  );
};

export default WatchList;
