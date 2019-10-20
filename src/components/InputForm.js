import React from 'react'
import '../css/InputForm.css'

class InputForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {defaultAmmount: 1, currencies: this.props.currencies}

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.props.updateCurrentCurrency(event.target.value)
    }

    render(){
        const optionsArr = this.state.currencies
        const listOptions = optionsArr.map(function(current, id){
            return (<option key={id} value={id}>{current.name}</option>)
        })


        return (
            <div className='inputForm'>
                <div className='inputBlock'>
                    <input className='inputAmount' type='number' value={this.state.defaultAmmount}></input>
                </div>
                <div className='currencyBlock'>
                    <select className='currency' onChange={this.handleChange}>
                        {listOptions}
                    </select>
                </div>
            </div>
        )
    }
}




export default InputForm