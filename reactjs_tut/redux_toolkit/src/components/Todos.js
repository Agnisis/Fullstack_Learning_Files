import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
const Todos = () => {

     const todos=useSelector(state=>state.Todos.todos)
  return (
    <div>
      
    </div>
  )
}
import { UseSelector } from 'react-redux/es/hooks/useSelector'
export default Todos
