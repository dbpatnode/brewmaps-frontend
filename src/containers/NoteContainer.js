import React, { Component } from "react";
import ReactStars from "react-rating-stars-component";

class NoteContainer extends Component {
  state = {
    review: "",
    atmosphere: "",
    rating: "",
  };

  handleInputChange = (e) => {
    // debugger;
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    // alert("Atmosphere saved!");
    e.preventDefault();
  };

  ratingChanged = (newRating) => {
    this.setState({
      rating: newRating,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="Custom Select">
            <label>
              Atmosphere
              <select
                placeholder="Select Atmosphere"
                name="atmosphere"
                //   value={this.state.atmosphere}
                onChange={(e) => this.handleInputChange(e)}
              >
                <option value=""></option>
                <option value="dingy">Dingey</option>
                <option value="family-friendly">Family Friendly</option>
                <option value="bright">Bright</option>
                <option value="inviting">Inviting</option>
                <option value="casual">Casual</option>
                <option value="group-friendly">Group Friendly</option>
                <option value="hip">Hip</option>
                <option value="divy">Dive-y</option>
                <option value="pet-friendly">Pet Friendly</option>
              </select>
            </label>
          </div>
          <div className="star-rating">
            <ReactStars
              number={this.state.rating}
              count={5}
              onChange={this.ratingChanged}
              size={15}
              activeColor="#8fa540"
            />
          </div>
          <br />
          <label>
            review
            <input
              type="text"
              name="review"
              value={this.state.review}
              onChange={this.handleInputChange}
              required
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NoteContainer;
