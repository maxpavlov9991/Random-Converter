import React from 'react'
import '../css/InputForm.css'

class InputForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return (
            <div className='inputForm'>
                <div className='inputBlock'>
                    <input className='inputAmount' type='number'></input>
                </div>
                <div className='currencyBlock'>
                    <select className='currency'>
                        <option>Rubles</option>
                        <option>Dollars</option>
                        <option>Euros</option>
                        <option>Yuan</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default InputForm