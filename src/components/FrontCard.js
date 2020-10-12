import React from 'react';
import StarRating from './StarRating';

const FrontCard = (props) => {
   
    const { brewery_name, brewery_type, phone, website_url } = props.brewery;
    return (
        <div className="text-center font-weight-light" id='frontCard'>
            <div className="mt-3">
                <h5>{brewery_name}</h5>
            </div>
            <div className="mt-3">
                    
            <button className="remove-fav" onClick={() => props.removeFavorite(props.park)}/>
                Remove Favorite
            <button/>
            </div>
            <div className="mt-3">
                <StarRating
                    favorites={props.favorites} 
                    addFavorite={props.addFavorite}
                    brewery = {props.brewery}
                />
                <div>{brewery_type}</div>
                <div> Phone number: {phone} </div>
                <div>
                    <a
                    target="_new"
                    href={website_url}
                    >
                    {brewery_name}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FrontCard;