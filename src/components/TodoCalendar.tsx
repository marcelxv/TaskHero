import React from 'react'
import { useContext } from 'react'
import TodoContext from '../context/TodoContext'
import { Box } from '@primer/react'

function TodoCalendar() {
    const { todos, persistTodos } = useContext(TodoContext)
    persistTodos()
  return (
    <Box>
        <h1>TodoCalendar</h1>
        <Box>
            {todos.map(todo => (
                <Box key={todo.index}>
                    {todo.index} - {todo.text} - {todo.priority} - {todo.address} - {todo.zipCode} - {todo.date} - {todo.time}
    </Box>
            ))}
        </Box>
    </Box>
  )
}

export default TodoCalendar