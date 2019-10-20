import React from 'react'
import '../css/NeonButton.css'

class NeonButton extends React.Component {
    constructor(props){
        super(props)
        this.state = {counter: 1, bgcolor: 'coral'}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            counter: prevState.counter + 1,
            bgcolor: 'black'
        }))
    }

    render(){
        const style = { backgroundColor: this.state.bgcolor }
        console.log(this.state)

        return (
            <a href='#' onClick={this.handleClick} className='buttonShow' style={this.state.style}>
                <span className='buttonLine buttonLine--top'></span>
                <span className='buttonLine buttonLine--right'></span>
                <span className='buttonLine buttonLine--bottom'></span>
                <span className='buttonLine buttonLine--left'></span>
                Convert
            </a>
        )
    }
}

export default NeonButton