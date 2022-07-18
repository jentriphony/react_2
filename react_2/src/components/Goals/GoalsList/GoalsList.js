import './GoalsList.css'

import GoalItem from './../GoalItem/GoalItem'



const GoalsList = dataProps => {



	return (

<ul className='goals-list'>



 { dataProps.goals.map(goal => (
 <GoalItem
  key={ goal.id }
  id={ goal.id }
  onRemove={ dataProps.onGoalRemove }
 >
  { goal.text }
 </GoalItem>
 )) }



</ul>

)



}



export default GoalsList
