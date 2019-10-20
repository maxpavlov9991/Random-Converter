import React from 'react'
import '../css/InputForm.css'

class InputForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {}

        this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
    }

    handleChangeCurrency(event){
        this.props.updateCurrentCurrency(event.target.value)
    }

    handleChangeInput(event){
        this.props.updateCurrentValue(event.target.value)
    }

    render(){
        const optionsArr = this.props.currencies
        const listOptions = optionsArr.map(function(current, id){
            return (<option key={id} value={id}>{current.name}</option>)
        })

        return (
            <div className='inputForm'>
                <div className='inputBlock'>
                    <input className='inputAmount' type='number' defaultValue={this.props.currentValue} onChange={this.handleChangeInput}></input>
                </div>
                <div className='currencyBlock'>
                    <select className='currency' onChange={this.handleChangeCurrency}> 
                        {listOptions}
                    </select>
                </div>
            </div>
        )
    }
}




export default InputForm