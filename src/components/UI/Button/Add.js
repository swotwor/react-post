import React from 'react'
import Button from '@material-ui/core/Button';


const Add = ({ children }) => {
	return (
		<Button variant="contained" color="primary">
			{children}
		</Button>
	)
}

export default Add
