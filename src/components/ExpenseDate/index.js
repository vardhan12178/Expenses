import './index.css'
const ExpenseDate=(props)=>{
    const {date}=props
const month=date.toLocaleDateString(undefined,{month:"long"});
const day=date.toLocaleDateString(undefined,{day:"numeric"})
const year=date.toLocaleDateString(undefined,{year:"numeric"})

    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}
export default ExpenseDate