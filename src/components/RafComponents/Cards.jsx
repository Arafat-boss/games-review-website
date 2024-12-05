import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://game-review-server.vercel.app/reviews')
        .then(res => res.json())
        .then(data =>{
            setData(data);
        })
    },[])


    const sortedData = [...data].sort((a, b) => b.rating - a.rating);

    // Step 2: Take the top 6 items
    const topSix = sortedData.slice(0, 6);


    return (
        <>
        <h2 className="font-bold text-4xl flex justify-center my-10">Highest Rated Game</h2>
        <div className="grid lg:grid-cols-3 gap-5 w-11/12 mx-auto">
            {
                topSix.map(card =><Card key={card._id} card={card}></Card>)
            }
        </div>
        </>
    );
};

export default Cards;