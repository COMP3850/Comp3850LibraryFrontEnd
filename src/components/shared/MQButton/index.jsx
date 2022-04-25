import React from 'react'
import Button from '@mui/material/Button'
import classNames from 'classnames'
import './index.scss'

const MQButton = (props) => {
	const { stylename } = props
	const inputClasses = classNames('custom-button', stylename)
	return (
		<Button variant="contained" className={inputClasses}>
			Contained
		</Button>
	)
}

export default MQButton
