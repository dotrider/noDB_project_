import React, { Component } from "react";
import './PostTrails.css';

export default class PostTrails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      location: "",
      difficulty: "",
      review: "",
      imageURL: ""
    };
  }

  handleChange = e => {
    console.log(this.handleChange);
    let { value, name } = e.target;
    console.log("1",value, name)
    this.setState({
      [name]: value
    });
  };

  handleClick = () => {
    let { name, location, difficulty, review, imageURL } = this.state;
    let newTrail = {
      name,
      location,
      difficulty,
      review,
      imageURL,
    };
    this.props.addTrail(newTrail);
    this.setState({
      name: "",
      location: "",
      difficulty: "",
      review: "",
      imageURL: ''
    });
  };

  render() {
    return (
        //Input boxes for Name, Location, Difficulty, Review
        //Displays on left side of screen
      <div className='trailForm left'>
        <div className='innerForm'>
          <h4>Trail:</h4>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder=" name"
            onChange={this.handleChange}
          />
          <h4>Location:</h4>
          <input
            type="text"
            name="location"
            value={this.state.location}
            placeholder=" location"
            onChange={this.handleChange}
          />
          <h4>Difficulty:</h4>
            <select className="selectbox" onChange={this.handleChange } name="difficulty">
              <option defaultValue="default">Choose one</option>
              <option value="Easy" >Easy</option>
              <option value="Medium" >Medium</option>
              <option value="Hard" >Hard</option>
            </select>
            <h4>Image Url:</h4>
           <input
            type="text"
            name="imageURL"
            value={this.state.imageURL}
            onChange={this.handleChange}
          />
            <br/>
            <h4>Review:</h4>
            <textarea
            type="text"
            name="review"
            rows="5"
            cols="60"
            value={this.state.review}
            placeholder=" ..."
            onChange={this.handleChange}
          />
          <br/>
          <div className="addbt">
          <button className="addbtn" onClick={this.handleClick}>Add</button>
        </div>
        </div>
        
      </div>
    );
  }
}
