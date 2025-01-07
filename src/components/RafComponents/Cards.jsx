import { useEffect, useState } from "react";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";
import { useLoaderData } from "react-router-dom";

const Cards = () => {
  const allData = useLoaderData();
  const [data, setData] = useState(allData);

  return (
    <>
      <Fade>
        <h2 className="font-bold text-4xl flex justify-center my-10">
          Highest Rated Game
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 w-11/12 mx-auto">
          {data.map((card) => (
            <Card key={card._id} card={card}></Card>
          ))}
        </div>
      </Fade>
    </>
  );
};

export default Cards;
