import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const BreweryShowPageBack = (props) => {
    const {brewery_name, website_url, phone} = props.brewery;
    return (
        <div > 
            <div className="mt-3"> 
                <div className="font-weight-light text-center">
                    <div>
                        <h5>{brewery_name}</h5>
                    </div>
                    <div className="mt-3">
                    {/* <button>Add To Favorite</button><br/>
                    <button>Remove From Favorite</button> */}

                    <a style={{display: "table-cell"}} href={website_url} target="_blank" rel="noopener noreferrer">website</a>
                <br/>

                <a href= {`tel:${phone}`}>Call us at {phone}</a>
                <br/>
                    {/* <form>
                    <label> */}
                        {/* <label> Brewery Notes:</label>
                        <input type="textarea" name="textvalue" className ="note-input"/>
                    </label><br/>
                    <input type="submit" value="Submit" /> */}
                    {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreweryShowPageBack;
