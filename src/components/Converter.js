import React from 'react'
import '../css/Converter.css'
import InputForm from './InputForm'
import NeonButton from './NeonButton'
import Result from './Result'

class Converter extends React.Component {
    constructor(props){
        super(props)
        this.state = {currencies: CURRENCIES, things: THINGS, currentCurrency: getCurrentCurrency(CURRENCIES, 0), currentValue: 1,
                        currentThing: null}
    }

    updateCurrentCurrency = (id) => {
        this.setState({currentCurrency: CURRENCIES[id]})
    }

    updateCurrentValue = (value) => {
        this.setState({currentValue: value})
    }

    updateCurrentThing = () => {
        this.setState({currentThing: THINGS[Math.floor(Math.random() * THINGS.length)]})
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

                <InputForm currencies={this.state.currencies} currentValue={this.state.currentValue}
                updateCurrentValue={this.updateCurrentValue} updateCurrentCurrency={this.updateCurrentCurrency} />

                <NeonButton currentCurrency={this.state.currentCurrency} currentValue={this.state.currentValue}
                updateCurrentThing = {this.updateCurrentThing}/>

                <Result currentCurrency={this.state.currentCurrency} currentValue={this.state.currentValue}
                currentThing={this.state.currentThing}/>

            </div>

        )
    }
}

const CURRENCIES = [
    //coefficient: 1 RUB = coefficient currence
    {name: '₽ RUB', сoefficient: 1},
    {name: '$ USD', сoefficient: 63.86},
    {name: '€ EUR', сoefficient: 71.22},
    {name: '¥ CNY', сoefficient: 9.02},
]

const THINGS = [
    {id: 0, name: 'Apples', coefficient: 7.04, imgName: '0.jpg', url: 'https://папироска.рф/wa-data/public/shop/products/31/10/1031/images/100165/100165.aromatizator-ngf---zelenoe-yabloko.970.jpg'},
    {id: 1, name: 'Oranges', coefficient: 10.88, imgName: '1.jpg', url: 'https://soappotions.com/wp-content/uploads/2017/10/orange.jpg'},
    {id: 2, name: 'Watermelons', coefficient: 250.00, imgName: '2.jpg', url: 'https://n1s1.hsmedia.ru/d5/ce/d0/d5ced00723c28f9070fecd1d78c080db/665x495_1_b51090c822930d40505385a6798f7a84@1000x745_0xac120003_2747968621562649731.jpg'},
    {id: 3, name: 'Pears', coefficient: 21.42, imgName: '3.jpeg', url: 'https://img2.zakaz.ua/upload.version_1.0.87a1c02cc6f50b9ca8ac9789159e9953.1350x1350.jpeg'},
    {id: 4, name: 'Large', coefficient: 500000000, imgName: '4.jpeg', url: 'http://i.artfile.ru/4000x2748_913368_[www.ArtFile.ru].jpg'}
]

function getCurrentCurrency(currencies, id){
    return currencies[id]
}

export default Converter