import './App.css'

import { useState } from 'react'
import GoalsList from './components/Goals/GoalsList/GoalsList'
import Form from './components/Goals/Form/Form'



const App = () => {



  const [goals, setGoals] = useState([

    {
      text: 'goal_1',
      id: 'goal_1'
    },
    {
      text: 'goal_2',
      id: 'goal_2'
    }

  ])



  const goalAddHandler = goalInputValue => {

    setGoals(previousGoals => {
      const goals_ = [...previousGoals]
      goals_.unshift({
        text: goalInputValue,
        id: 'goal_' + (goals.length + 1)
      })
			return goals_
    })

  }

  const goalRemoveHandler = goalId => {

    setGoals(previousGoals => {
      const goals_ = previousGoals.filter(goal => goal.id !== goalId)
      return goals_
    })

  }

  let goals_ = goals.length === 0 ? (

<p style={ { textAlign: 'center' } }>
 no goals
</p>

  ) : (

<GoalsList goals={ goals } onGoalRemove={ goalRemoveHandler } />

	)


  return (

<div>



 <section id='goal-form'>
  <Form onGoalAdd={ goalAddHandler } />
 </section>

 <section id='goals-list'>
  { goals_ }
 </section>



</div>

  )



}



export default App
