import React, { Component } from "react";
import ReactStars from "react-rating-stars-component";

class NoteContainer extends Component {
  state = {
    review: "",
    atmosphere: "",
    rating: "",
    on: false,
  };

  toggle = (e) => {
    // debugger;

    this.setState({
      on: !this.state.on,
    });
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
    const note = {
      review: this.state.review,
      atmosphere: this.state.atmospher,
      rating: this.state.rating,
      user_id: this.props.user,
      brewery_id: this.props.brewery,
    };
    this.props.addNotes(note);
  };

  ratingChanged = (newRating) => {
    this.setState({
      rating: newRating,
    });
  };

  render() {
    const notes = (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        id={this.props.brewery}
        class="bi bi-pencil"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
        />
      </svg>
    );
    return (
      <div className="notes">
        <div className="note-toggle">
          <button
            onClick={(e) => this.toggle(e, this.props.brewery)}
            id="note-button"
          >
            {notes}
          </button>
        </div>
        {this.state.on && (
          <span id="note-info">
            <form onSubmit={this.handleSubmit}>
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
              <button
                type="submit"
                value="Submit"
                className="note-submit-button"
              >
                Add Note
              </button>
            </form>
          </span>
        )}
      </div>
    );
  }
}

export default NoteContainer;
