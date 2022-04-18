import React from 'react'
import StarRating from '../StarRating';
import { FaTrash } from "react-icons/fa";
import useColors from '../ColorProvider'

const Color = ({id, title, color, rating}) => {
    const {onRemoveColor, onRateColor} = useColors()
    return(
        <>
            <h1>{title}</h1>
            <button onClick={() => onRemoveColor(id)}><FaTrash /></button>
            <div style={{height: 50, backgroundColor: color}}></div>
            <StarRating selectedStars={rating} onRate={rating => onRateColor(id, rating)}/>
        </>
    )
}

export default Color;