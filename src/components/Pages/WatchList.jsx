import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import SingleWatchList from "../RafComponents/SingleWatchList";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Watch List</title>
    </Helmet>
      <thead className="table flex justify-between mx-auto">
        <tr className="flex justify-between">
          <th></th>
          <th className="">Name</th>
          <th className="">Email</th>
          <th className="">Genres</th>
          <th></th>
        </tr>
      </thead>
      {findWatchUsers.map((wList) => (
        <SingleWatchList key={wList._id} wList={wList}></SingleWatchList>
      ))}
    </div>
  );
};

export default WatchList;
