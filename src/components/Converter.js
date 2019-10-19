import React from 'react'
import '../css/Converter.css'

class Converter extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className='converterContent'>
                <div className='descriptionBlock'>
                    <span className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                    id est laborum.</span>
                </div>
                <div className='contentForm'>
                    <div className='inputBlock'>
                        <input className='inputAmount' type='number'></input>
                    </div>
                    <div className='currencyBlock'>
                        <select className='currency'>
                            <option>Rubles</option>
                            <option>DOLLARS</option>
                            <option>EURO</option>
                            <option>YUAN</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default Converter