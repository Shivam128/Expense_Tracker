import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm =(props)=>{
    //method 2 
    const [title,setTitle] = useState('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState('');

    // method 1 depending on the previous state
    // const [userInput,setUserInput] = useState({ title:'', amount:'', date:''})

    const titleHandler =(e)=>{
        // method:1
        // setUserInput({...userInput,title:e.target.value})
        // method 2
        setTitle(e.target.value)
    }
    const dateHandler =(e)=>{
        // method:1
        // setUserInput({...userInput,date:e.target.value})
        // method 2
        setDate(e.target.value)
    }
    const amountHandler =(e)=>{
        // method:1  may or may not give exact prev state
        // setUserInput({...userInput,amount:e.target.value})
         //Method 1: to get latest prev state exacty 
        //  setUserInput((prevState)=>{ return {...prevState,amount:e.target.value}})       
        // method 2
        setAmount(e.target.value)
    }
    const submitHandler = (e)=>{
        e.preventDefault()
        const expenseData = {
            date : new Date(date),
            title: title, 
            amount: +amount,
        }
      props.onSaveExpenseData(expenseData);
    
        setAmount('');
        setTitle('');
        setDate('');

    }
    const cancelExpense =()=>{
      props.onCancelExpense();
    }
    
    return <form onSubmit={submitHandler} >
    <div className='new-expense__controls' >
        <div className='new-expense__control' >
            <label>Title</label>
            <input type='text' value={title} onChange={titleHandler}/>
        </div>
        <div className='new-expense__control' >
            <label>Amount</label>
            <input type='number' value={amount} min='0.01' step='0.01' onChange={amountHandler}/>
        </div>
        <div className='new-expense__control' >
            <label>Date</label>
            <input type='date' value={date} min='2019-01-01' max='2022-12-31' onChange={dateHandler} />
        </div>
    </div>
    <div className='new-expense__actions' >
    <button type='button' onClick={cancelExpense}>Cancel</button>
    <button type='submit' >Add Expense</button>

    </div>
    </form>
}

export default ExpenseForm