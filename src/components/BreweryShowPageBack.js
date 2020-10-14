import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const BreweryShowPageBack = (props) => {
    const {brewery_name} = props.brewery;
    return (
        <div > 
            <div className="mt-3"> 
                <div className="font-weight-light text-center">
                    <div>
                        <h5>{brewery_name}</h5>
                    </div>
                    <div className="mt-3">
                    <button>Add To Favorite</button><br/>
                    <button>Remove From Favorite</button>
                    <form>
                    <label>
                        <label> Brewery Notes:</label>
                        <input type="textarea" name="textvalue" className ="note-input"/>
                    </label><br/>
                    <input type="submit" value="Submit" />
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreweryShowPageBack;
