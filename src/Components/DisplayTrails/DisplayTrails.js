import React from 'react'
import './DisplayTrails.css';


const DisplayTrails = (props) => {

        const {name, location, difficulty, review, imageURL, id} = props.trail
    return(
        <div className='displayTrails'>
            <img className="mainImage" src={imageURL} alt="trail"/> 
           
            <div>
                <h2>{name}</h2>
                <p><span>Location: </span>{location}</p>
                <p><span>Dificultiy-level: </span>{difficulty}</p>
                <p className="review"><span>Review: </span>{review}</p>  
            </div>
            <div className="buttons">
            <button className='displaybtns' onClick={props.toggle}>Edit</button>
            <button className='displaybtns deleteleft' onClick={() => props.deleteTrail(id)}>Delete</button>
            </div>
            <br/><br/>
            
        </div>
    )

}

export default DisplayTrails
