import React from 'react'
import '../css/Converter.css'
import InputForm from './InputForm'
import NeonButton from './NeonButton'
import Resault from './Resault'

class Converter extends React.Component {
    constructor(props){
        super(props)
        this.state = {currencies: CURRENCIES, currentCurrency: getCurrentCurrency(CURRENCIES, 0)}
    }

    updateCurrentCurrency = (id) => {
        console.log(id)
        this.setState({currentCurrency: getCurrentCurrency(CURRENCIES, id)})
    }

    render() {
        return (
            <div className='converterBlock'>
                <div className='descriptionBlock'>
                    <span className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                    id est laborum.</span>
                </div>

                <InputForm currencies={this.state.currencies} currentCurrency={this.state.currentCurrency} updateCurrentCurrency={this.updateCurrentCurrency} />

                <NeonButton currentCurrency={this.state.currentCurrency}/>

                <Resault currentCurrency={this.state.currentCurrency}/>

            </div>

        )
    }
}

const CURRENCIES = [
    //coefficient: 1 RUB = coefficient currence
    {name: 'RUB', сoefficient: 1},
    {name: 'USD', сoefficient: 0.016},
    {name: 'EUR', сoefficient: 0.014},
    {name: 'CNY', сoefficient: 0.111},
]

function getCurrentCurrency(currencies, id){
    return currencies[id]
}

export default Converter