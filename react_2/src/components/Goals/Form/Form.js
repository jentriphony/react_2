import classes from './Form.module.css'

import { useState } from 'react'
import Button from './../../UI/Button/Button'



const Form = dataProps => {



	const [inputValue, setInputValue] = useState('')
	const [inputIsValid, setInputIsValid] = useState(true)



	const inputHandler = event => {

		const inputValue_ = event.target.value
		setInputValue(event.target.value)
		if(!inputIsValid) {
			if(inputValue_.trim().length > 0) {
				setInputIsValid(true)
			}
		}

	}

	const submitHandler = event => {

		event.preventDefault()

		if(inputValue.trim().length === 0) {
			setInputIsValid(false)
			return
		}
		dataProps.onGoalAdd(inputValue)
		setInputValue('')

	}


	return (

<form onSubmit={ submitHandler }>



 <div className={ `
  ${classes['form-control']}
  ${!inputIsValid ? ' '  + classes.error : ''}
 ` }>
  <label>goal</label>

  <input
   type='text'
   value={ inputValue }
   onChange={ inputHandler }
  />
 </div>

 <Button type='submit'>add goal</Button>



</form>

	)



}



export default Form
