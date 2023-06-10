// importing react object and useState fn as piece from react library
import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css';
import Card from "../UI/Cards.js";
function ExpenseItem(props) {
  // destructuring return array from useState
  // const [title,setTitle] =useState(props.title);
  // let titleInitial = props.title;
  //  const clickHandler = ()=>{
  //   setTitle('updated');
    // will do this with useState hook
    // titleInitial = 'Updated';
    // console.log(titleInitial)
  //  }
    return (<li>
      <Card className='expense-item' >
       <ExpenseDate date={props.date} />
       <div className='expense-item__description' >  <h2>{props.title}</h2></div>
       {/* below code will not work due to written reason in copy and hence we will use useState for this. */}
       {/* <div className='expense-item__description' >  <h2>{titleInitial}</h2></div> */}
       <div className='expense-item__price' >${props.amount}</div>
      </Card>
      </li>
    );
  } 
  
  // return React.createElement('div',{},React.createElement('h2',{}, 'Lets get started') , React.createElement(Expenses,{expenses : expenses}, 'Lets get started') )
  
  export default ExpenseItem;