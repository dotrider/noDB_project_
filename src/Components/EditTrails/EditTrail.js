import React, {Component} from 'react'
import './EditTrail.css'


export default class EditTrail extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.trail.name,
            location: this.props.trail.location,
            difficulty: this.props.trail.difficulty,
            review: this.props.trail.review,
            imageURL: this.props.trail.imageURL
          };
        }

        handleChange = e => {
            // console.log(this.handleChange);
            let { value, name } = e.target;
            this.setState({
              [name]: value
            });
          };
        
          handleClick = () => {
            //   console.log(this.handleClick)
             let {id} = this.props.trail; 
            let { name, location, difficulty, review, imageURL } = this.state;
            let updatedTrail = {
              name,
              location,
              difficulty,
              review,
              imageURL,
            };
            this.props.update(id, updatedTrail)
            this.props.toggle()
          }

        render(){
            return(
            <div className="editSec">
            <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="name"
            onChange={this.handleChange}
          />
          <br/>
          <input
            type="text"
            name="location"
            value={this.state.location}
            placeholder="location"
            onChange={this.handleChange}
          />
          <br/>
          <select className="selectbox" onChange={this.handleChange } name="difficulty">
              <option defaultValue="default">Choose one</option>
              <option value="Easy" >Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
          </select>
          <br/>
          <textarea
            type="text"
            name="review"
            rows="5"
            cols="60"
            value={this.state.review}
            placeholder="review"
            onChange={this.handleChange}
          />
          <br/>
           <input
            type="text"
            name="imageURL"
            value={this.state.imageURL}
            placeholder="imageURL"
            onChange={this.handleChange}
          />
          <br/>
          <button onClick={this.handleClick}>Save</button>
          <button onClick={this.props.toggle}>Cancel</button>
      
         </div>
            )
        }
    }




