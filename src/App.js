import React from 'react'
import Converter from './components/Converter'
import './css/App.css'

function App() {
	return (
		<div className='allBlock'>
			<div className='titleBlock'>
				<span className='title'>Random Converter</span>
			</div>
			<div className='converterBlock'>
				<Converter />
			</div>
		</div>
	)
}

export default App