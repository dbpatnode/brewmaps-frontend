import React from 'react';
import { FaBeer } from 'react-icons/fa';

const StarRating = (props) => {
    return (
        <div className= "like-brewery-button"> 
            <FaBeer 
                onClick={() => props.addFavorite(props.brewery)}
                className="beer" 
                size={20} 
                color={props.favorite ? "#ffc107" : "#e4e5e9"}
            />
        </div>
    );
}

export default StarRating