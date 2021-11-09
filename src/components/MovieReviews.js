// Code MovieReviews Here

import React from "react";

const MovieReviews = (props) => {
    // debugger
    return ( 
    <div className="review-list">
        <ul>
            {props.reviews.map((m, idx) => <li key={idx} className="review">{m.display_title}</li>)}
        </ul>
    </div>
    )
}

export default MovieReviews