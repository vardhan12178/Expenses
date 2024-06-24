import { useState } from "react";
import ExpenseFilter from "../ExpenseFilter";
import ExpenseItem from '../ExpenseItem'
import ExpensesChart from "../ExpensesChart";
import './index.css'

const Expenses=(props)=>{

    const[selectedYear,setYear]=useState()
    const{expenses}=props

    const handleExpenseYear=(year)=>{
        setYear(year)
   
      }
      const filteredList=expenses.filter(each=>(each.date.getFullYear().toString()===selectedYear))
      console.log(filteredList)
    return(
        <div className='expenses'>
            <div>
                <ExpenseFilter selected={selectedYear} getExpenseYear={handleExpenseYear}/>
                <ExpensesChart expenses={filteredList}/>
            </div>
            {filteredList.length===0 ? <h1 className="expense-item-description">No Items Found</h1> : filteredList.map((each)=>
           <ExpenseItem details={each} key={each.id}/>) }
        </div>
        
    )
}

export default Expenses