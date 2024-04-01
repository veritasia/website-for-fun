import React from 'react'
import Todo from './Todo'

export default function TodoList({todoItems}) {
  return (
          todoItems.map(todo => {
              return <Todo todo={todo} />
          })
  )
}
