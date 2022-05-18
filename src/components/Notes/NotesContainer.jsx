import React, { Component } from 'react';
import ReactStars from 'react-rating-stars-component';
import { pencil } from '../../SVGs/svg';

class NoteContainer extends Component {
  state = {
    review: '',
    atmosphere: '',
    rating: '',
    on: false,
  };

  toggle = (e) => {
    this.setState({
      on: !this.state.on,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const note = {
      review: this.state.review,
      atmosphere: this.state.atmosphere,
      rating: this.state.rating,
      user_id: this.props.user,
      brewery_id: this.props.brewery,
    };
    this.setState({ review: '', atmosphere: '', rating: '' });

    this.props.addNotes(note);
  };

  ratingChanged = (newRating) => {
    this.setState({
      rating: newRating,
    });
  };

  render() {
    return (
      <div className='notes'>
        <div className='note-toggle'>
          <button
            onClick={(e) => this.toggle(e, this.props.brewery)}
            id='note-button'
          >
            {pencil}
          </button>
        </div>
        {this.state.on && (
          <span id='note-info'>
            <form onSubmit={this.handleSubmit}>
              <div className='star-rating'>
                <ReactStars
                  number={this.state.rating}
                  count={5}
                  isHalf={true}
                  onChange={this.ratingChanged}
                  size={15}
                  activeColor='#8fa540'
                />
              </div>
              <br />
              <label>
                review
                <input
                  type='text'
                  name='review'
                  value={this.state.review}
                  onChange={this.handleInputChange}
                  required
                />
              </label>
              <button
                type='submit'
                value='Submit'
                className='note-submit-button'
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
