import React from "react";

const SingleWatchList = ({ wList }) => {
  const {email, name, photo, rating, title, description, date, genres} = wList;
  return (
    <div className="overflow-x-auto w-11/12 mx-auto">
      <table className="table">
        {/* head */}
     
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
             
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar ">
                  <div className="rounded-xl h-16 w-16 ">
                    <img
                      src={photo}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{title}</div>
                  <div className="text-sm opacity-50">{rating}/10</div>
                </div>
              </div>
            </td>
            <td>
             {email}
            </td>
            <td>{genres}</td>
            <th>
             
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleWatchList;
