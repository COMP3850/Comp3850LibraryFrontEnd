import React from 'react'
import MQButton from './components/shared/MQButton/index.jsx'
import MQInput from './components/shared/MQInput/index.jsx'

const App = () => {
	return (
		<div className="App">
			<MQInput type={'text'} />
			<MQInput type={'password'} />
			<MQButton />
		</div>
	)
}

export default App
