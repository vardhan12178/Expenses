import { useState } from "react";
import ExpenseInput from "./components/ExpenseInput";
import Expenses from "./components/Expenses";


const initial_list = [
  {
    id: 'e1',
    title: 'Mobile',
    amount: 45000,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 1500,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const[expenses,setList]=useState(initial_list)

  const handleNewExpense=(newExpense)=>{
    setList((prevlist)=>([newExpense,...prevlist]))

  }

  return (
    <div>
    <ExpenseInput addExpense={handleNewExpense}/>
    <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
