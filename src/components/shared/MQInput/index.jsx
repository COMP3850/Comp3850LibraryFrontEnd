import React from 'react'
import TextField from '@mui/material/TextField'
import classNames from 'classnames'

import './index.scss'

const MqInput = (props) => {
	const { type, placeholder, stylename } = props
	const inputClasses = classNames('custom-input', stylename)
	return (
		<TextField
			type={type}
			placeholder={placeholder}
			variant="filled"
			className={inputClasses}
			{...props}
		/>
	)
}

export default MqInput
