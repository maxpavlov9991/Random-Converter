import React from 'react'
import '../css/Result.css'

class Result extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    calculateValue = (currencyCoefficient, thingCoefficient, value) => {
        return Number((value * currencyCoefficient / thingCoefficient).toFixed(10))
    }

    result = () => {
        if (this.props.currentThing != null){
            return (
            <div className='resultContainer'>
                <h2 className='value'>&asymp; {this.calculateValue(this.props.currentCurrency.сoefficient,
                    this.props.currentThing.coefficient, this.props.currentValue)}</h2>
                <h2 className='name'>{this.props.currentThing.name}</h2>
                <div className='imageBlock'>
                    <img src={this.props.currentThing.url} alt={this.props.currentThing.name} className='image'></img>
                </div>
            </div>
            )
        } else {
            return (
            <div className='resultContainer'>
                <h2> PUSH BUTTON "RANDOM" </h2>
            </div>)
        }
    }

    render(){
        return (
        <div className='resultBlock'>
            {this.result()}
        </div>
        )
    }
}

export default Result