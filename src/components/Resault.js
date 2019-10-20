import React from 'react'
import '../css/Resault.css'

class Resault extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    calculateValue = (currencyCoefficient, thingCoefficient, value) => {
        return Number((value * currencyCoefficient / thingCoefficient).toFixed(10))
    }

    resault = () => {
        if (this.props.currentThing != null){
            return (
            <div className='resaultContainer'>
                <h1 className='value'>&asymp; {this.calculateValue(this.props.currentCurrency.сoefficient,
                    this.props.currentThing.coefficient, this.props.currentValue)}</h1>
                <h1 className='name'>{this.props.currentThing.name}</h1>
                <div className='imageBlock'>
                    <img src={this.props.currentThing.url} alt={this.props.currentThing.name} className='image'></img>
                </div>
            </div>
            )
        } else {
            return (
            <div className='resaultContainer'>
                <h1> PUSH BUTTON "RANDOM" </h1>
            </div>)
        }
    }

    render(){
        return (
        <div className='resaultBlock'>
            {this.resault()}
        </div>
        )
    }
}

export default Resault