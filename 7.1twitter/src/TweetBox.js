import React, { Component } from 'react';
import {} from 'react-bootstrap';
class TweetBox extends Component{
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      photoAdded: false
    }
  }
  handleChange() {
    this.setState({ text: event.target.value });
  }
  togglePhoto() {
    this.setState({ photoAdded: !this.state.photoAdded });
  }
  remainingCharacters() {
    if (this.state.photoAdded) {
      return 140 - 23 - this.state.text.length;
    } else {
      return 140 - this.state.text.length;
    }
  }
  render() {
    return (
      <div className="well clearfix">
        <textarea className="form-control"
                  onChange={this.handleChange}></textarea>
        <br/>
        <span>{ this.remainingCharacters() }</span>
        <button className="btn btn-primary pull-right"
          disabled={this.state.text.length === 0 && !this.state.photoAdded}>Tweet</button>
        <button className="btn btn-default pull-right"
          onClick={this.togglePhoto}>
          {this.state.photoAdded ? "✓ Photo Added" : "Add Photo" }
        </button>
      </div>
    )
  }
}



export default TweetBox;
