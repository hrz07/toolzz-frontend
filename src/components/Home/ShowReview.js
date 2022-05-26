import React, { useEffect, useState } from 'react';

const ShowReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    const reverseArray = [...reviews].reverse()
    

    return (
        <div className="p-5 ">
            <h1 className="text-center text-3xl font-bold">-LATEST REVIEWS-</h1>
            <div className="flex flex-wrap items-center justify-center gap-2">
                {
                    reverseArray.slice(0,3).map((item, index) => {
                        return <div key={item._key} className="card w-[350px] bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{ item.name}</h2>
                                <p>{ item.review}</p>
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default ShowReview;