import './GoalItem.css'



const GoalItem = dataProps => {



	const removeHandler = () => {

		dataProps.onRemove(dataProps.id)

	}


	return (

<li className='goal-item' onClick={ removeHandler }>



 { dataProps.children }



</li>

	)



}



export default GoalItem
