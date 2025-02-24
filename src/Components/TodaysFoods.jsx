import React from 'react'

const TodaysFoods = (props) => {
    return (
        <div>
                <h2><strong>Today's food</strong></h2>
                <ul>
                    {props.list.map((food,i) => 
                    <li key={i}>{food.quantity} {food.name} = {food.calories * food.quantity} calories 
                    <button onClick={()=>{props.deleteItem(i)}}>Delete</button></li> 
                    )}
                </ul>
                <p>Total: {props.list.reduce((acc,food) => acc+food.quantity*food.calories,0)} calories</p>
            </div>
    )
}

export default TodaysFoods

