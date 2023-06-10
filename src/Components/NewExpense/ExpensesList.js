import './ExpensesList.css'
import ExpenseItem from '../Expenses/ExpenseItem'

const ExpensesList = (props)=>{
        // let expenseContent = <p> No content found</p>
  if(props.expense.length===0)
  {return <h2 className='expenses-list__fallback' >Found No Expenses</h2> }
    
return <ul className='expenses-list' >
         {props.expense.map(expense => {return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />})}
    </ul>

    
    

}

export default ExpensesList