import React, { Component } from "react";
// import FrontCard from '../components/FrontCard'
// import BackCard from '../components/BackCard';
// import Flippy, { FrontSide, BackSide } from 'react-flippy';

class NoteContainer extends Component {
  state = {
    review: "",
    atmosphere: "",
    rating: "",
  };

  handleInputChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    alert("Atmosphere saved!");
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Atmosphere
            <select
              value={this.state.atmosphere}
              onChange={this.handleAtmosphereChange}
            >
              <option value=""></option>
              <option value="dingy">Dingy</option>
              <option value="family-friendly">Family Friendly</option>
              <option value="bright">Bright</option>
              <option value="inviting">Inviting</option>
              <option value="casual">Casual</option>
              <option value="group-friendly">Group Friendly</option>
              <option value="hip">Hip</option>
              <option value="divy">Divey</option>
              <option value="pet-friendly">Pet Friendly</option>
            </select>
          </label>

          <label>
            Rating
            <select value={this.state.value} onChange={this.handleInputChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <label>
            review
            <input
              type="text"
              name="Review"
              placeholder="review"
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
