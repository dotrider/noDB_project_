import React, {Component} from 'react'
import EditTrail from '../EditTrails/EditTrail'
import DisplayTrails from '../DisplayTrails/DisplayTrails'

//display.js
export default class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            edit: false
        }
    }



toggleEdit = () => {
    let {edit} = this.state;
    this.setState({
        edit: !edit
    })
}

render(){
    return(
        //Displays on the right side of screen
        <div className='right'>
            {
            this.state.edit ? 
            < EditTrail {...this.props} toggle={this.toggleEdit} />
            :
            < DisplayTrails {...this.props} toggle={this.toggleEdit} />
            }

        </div>
    )
}
}

