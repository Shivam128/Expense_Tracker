import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem.js";
import ExpensesList from "../NewExpense/ExpensesList.js";
import './Expenses.css';
import Card from "../UI/Cards.js";
import ExpensesChart from "../Charts/ExpensesChart.js";
import ExpensesFilter from "../NewExpense/ExpensesFilter.js";

function NewExpenses(props){
  const [expYear,setExpYear]= useState('2020');
  const expenseFilterChange = (year)=>{
    setExpYear(year); 
  }
  const filteredYear = props.expense.filter( expense => expense.date.getFullYear() == expYear);
  
    return(<div>
<Card className="expenses">
  {/* utilizing two way binding in selected prop */}
      <ExpensesFilter selected={expYear} onExpenseFilterChange={expenseFilterChange} />
    {/* {filteredYear.length===0 && <p>No expenses found</p>}
    {filteredYear.length>0 && filteredYear.map(expense => {return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />})}
     */}
     <ExpensesChart expense={filteredYear}/>
     <ExpensesList expense={filteredYear} />
      
      {/* <h3><ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} abc={expenses[0].id} /></h3>
      <h3><ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} abc={expenses[1].id} /></h3>
      <h3><ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} abc={expenses[2].id} /></h3>
      <h3><ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} abc={expenses[3].id} /></h3> */}
        </Card>
    </div>
      
    )
}

export default NewExpenses