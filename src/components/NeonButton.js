import React from 'react'
import '../css/NeonButton.css'

class NeonButton extends React.Component {
    constructor(props){
        super(props)
        this.state = {}

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault();
        this.props.updateCurrentThing()
    }



    render(){
        return (
            <a href='#' onClick={this.handleClick} className='buttonShow'>
                <span className='buttonLine buttonLine--top'></span>
                <span className='buttonLine buttonLine--right'></span>
                <span className='buttonLine buttonLine--bottom'></span>
                <span className='buttonLine buttonLine--left'></span>
                Random!
            </a>
        )
    }
}

export default NeonButton