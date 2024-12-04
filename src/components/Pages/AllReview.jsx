import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../RafComponents/Card';
import Navbar from '../RafComponents/Navbar';

const AllReview = () => {
    const allReviewData = useLoaderData();
    return (
        <>
        <div className="grid lg:grid-cols-3 gap-5 w-11/12 mx-auto mt-10">
        {
            allReviewData.map(card =><Card key={card._id} card={card}></Card>)
        }
    </div>
    </>
    );
};

export default AllReview;