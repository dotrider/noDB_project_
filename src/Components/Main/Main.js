import React, { Component } from "react";
import axios from "axios";
import Content from "../Content/Content";
import PostTrails from '../PostTrails/PostTrails';
import './Main.css'

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      trails: []
    };
  }
  ///////////////

  componentDidMount() {
    axios.get(`/api/trails`).then(res => {
      console.log(res)
      this.setState({
        trails: res.data
      });
    });
  }

  addTrails = trail => {
    axios.post(`/api/trails`, trail).then(res => {
      this.setState({
        trails: res.data
      });
    });
  };

  updateTrail = (id, trail) => {
    axios.put(`/api/trails/${id}`, trail).then(res => {
      this.setState({
        trails: res.data
      });
    });
  };

  deleteTrail = (id) => {
    axios.delete(`/api/trails/${id}`).then(res => {
      this.setState({
        trails: res.data
      });
    });
  };

  ////////////////

  render() {
    console.log(this.state.trails);
    const mappedTrails = this.state.trails.map(trail => {
      return <Content key={trail.id}
       trail={trail} 
       deleteTrail={this.deleteTrail}
        update={this.updateTrail}
      />;
    });
    return (
      //Main Container for Flexbox
      <div className="mainContainer">
         <PostTrails addTrail={this.addTrails}/>
        <div className='mapped-trails'>{mappedTrails}</div>
       
        
      </div>
    );
  }
}
