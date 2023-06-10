import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './InputExpense.css'
const InputExpense = (props)=>{
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const inputExpenseData = {
            ...enteredExpenseData,
            id: (Math.random()*10),
        }
      props.onAddExpense(inputExpenseData);
    }
    // const [form,setForm]  = useState('')
    const [isEditing,setIsEditing] = useState(false)
    const buttonHandler  = () => {
        setIsEditing(true)

    }
    const cancelExpense = ()=>{
        setIsEditing(false)
    }
    return <div className='new-expense' >
 {isEditing && <ExpenseForm onCancelExpense={cancelExpense} onSaveExpenseData={saveExpenseDataHandler} />}
{!isEditing && <button onClick={buttonHandler} >Add New Expense</button>}
    </div>
}

export default InputExpense