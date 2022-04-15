import React from 'react'
import StarRating from '../StarRating';
import { FaTrash } from "react-icons/fa";

const Color = ({id, title, color, rating, onRemove = f => f, onRate = f => f}) => {
    return(
        <>
            <h1>{title}</h1>
            <button onClick={() => onRemove(id)}><FaTrash /></button>
            <div style={{height: 50, backgroundColor: color}}></div>
            <StarRating selectedStars={rating} onRate={rating => onRate(id, rating)}/>
        </>
    )
}

export default Color;