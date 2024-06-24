import { useState } from 'react'
import './index.css'

const ExpenseInput=(props)=>{
    const[addBtn,setBtn]=useState(true)
    const [enteredTitle,setTitle]=useState('')
    const [enteredAmount,setAmount]=useState('')
    const [enteredDate,setDate]=useState('')
    const {addExpense}=props

const handleTitle=(event)=>{
    setTitle(event.target.value)
}

const handleAmount=(event)=>{
    setAmount(event.target.value)
}

const handleDate=(event)=>{
    setDate(event.target.value)
}

const handleSubmit=async(event)=>{
    event.preventDefault();
    const newData={
        title:enteredTitle,
        amount:+enteredAmount,
        date:new Date(enteredDate),
        id:Math.random().toString()
    }
    await addExpense(newData)
    setAmount('');
    setTitle('')
    setDate('')
    handleClick()
    
}


const handleClick=()=>{
    setBtn(prevaddBtn=>!prevaddBtn)
}


    return(
    <>
{addBtn ?  
<div class="new-expense">
    <button className="new-expense-button" onClick={handleClick} type="button">Add New Expense</button>
</div>  :   
<form onSubmit={handleSubmit} className='new-expense'>
      
<div className="new-expense__controls"><div className="new-expense__control">
            <label>Title</label>
                <input onChange={handleTitle} value={enteredTitle} type="text"/>
            </div>
            <div className="new-expense__control">
            <label>Amount</label>
                <input onChange={handleAmount} value={enteredAmount} type="number"/>
            </div>
            <div className="new-expense__control">
            <label>Date</label>
                <input onChange={handleDate} value={enteredDate} type="date" min="2020-1-1" max="2030-12-31"/>
            </div>
         
            <div className="new-expense__actions">
            <button className="new-expense-button" type="button" onClick={handleClick}>Cancel</button>
                <button className="new-expense-button" type="submit">Add Expense</button>
            </div>
            </div>
            </form>}
       
         
            </>
           
    )
}

export default ExpenseInput