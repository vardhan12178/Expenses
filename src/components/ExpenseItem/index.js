import ExpenseDate from '../ExpenseDate'
import './index.css'

const ExpenseItem=(props)=>{
    const{details}=props
    const{date,amount,title}=details
    

    return(
        <div className='expense-item'>
            <ExpenseDate date={date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>₹{amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem