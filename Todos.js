import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let mystyle ={
      minHeight: "70vh" ,
      margin : "40 px auto"
     }
  return (
    <div className="container" style = {mystyle}>
      <h3 className="my-3">Todos list</h3>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => { 
          return(
          <>
           <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr/>
           </>
          )
        })
      }
    </div>
  )
}
