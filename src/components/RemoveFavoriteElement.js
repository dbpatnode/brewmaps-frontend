import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const FavoriteElement = (props) => {
  return (
    <div className="remove-brewery-button">
      <FaTrashAlt
        onClick={() => props.addFavorite(props.brewery)}
        className="beer"
        size={20}
        color={props.favorite ? "#ffc107" : "#e4e5e9"}
      />
    </div>
  );
};

export default FavoriteElement;
