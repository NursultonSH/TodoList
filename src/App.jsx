import React, { useState } from 'react'

//images
import darkMode from './assets/icons/sun.svg'
import lightMode from './assets/icons/halfMoon.svg'

// babels
import { v4 as uuidv4 } from 'uuid'

//components
import Form from './components/Form/Form'
import Main from './components/Main/Main'
import EmptyTodo from './components/EmptyTodo/EmptyTodo'


const App = () => {

  const [todos, setTodos] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [inpText, setInptext] = useState('')
  const [validationError, setValidationError] = useState('')
  const [filter, setFilter] = useState('All')
  const [filteredTodos, setFilteredTodos] = useState([])


  const addTodo = (e) => {
    e.preventDefault()

    if (inpText && inpText.length > 3) {
      let newTodo = {
        todoTitle: inpText,
        isCompleted:false,
        id:uuidv4()
      }
      setValidationError('')
      setTodos([newTodo,...todos])
      setInptext('')
    }else{
      if (!inpText) {
        setValidationError('please enter some todo')
      }else if (inpText.length > 0 && inpText.length <= 3 ){
        setValidationError('you have not entered a todo')
      }
    }
  }

  const changeMode = () => {
    setIsDarkMode(!isDarkMode)
  }
  const handleInpText = (e) => {
    setInptext(e.target.value)
  }

  const changeCheckboxStatus = (id) => {
    let newTodos = todos.map((todo)=> {
      if (id === todo.id) {
        return {...todo,isCompleted : !todo.isCompleted}
      }else{
        return todo
      }
    })
    setTodos(newTodos)
  }
  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo)=> {
      if (id !== todo.id ) {
        return todo
      }
    })
    setTodos(newTodos)
  }
  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => {
      if (!todo.isCompleted) {
        return todo
      }
    })
    setTodos(newTodos)
  }
  const changeFilter = (filter) => {
    setFilter(filter)
  }

  const filterTodos = (todos,filter) => {
    switch (filter) {
      case 'Active':
        return todos.filter((todo) => { return !todo.isCompleted})
      case 'Completed':
        return todos.filter((todo) => { return todo.isCompleted})
      default:
        return todos
    }
  }
  

  return (
    <div className={ isDarkMode ? 'full-screen dark-mode-bg dark-mode' : 'full-screen'}>
      <div className='wrapper'>
        <header>
          <h1>todo</h1>
          <img onClick={changeMode} src={isDarkMode ? darkMode : lightMode} alt="" />
        </header>
        <Form
              handleInpText={handleInpText}
              inpText={inpText}
              addTodo={addTodo}
              validationError={validationError}
        />
        {!filterTodos(todos,filter).length ? <EmptyTodo /> : null}

        <Main 
              todos={filterTodos(todos,filter)}
              changeCheckboxStatus={changeCheckboxStatus}
              deleteTodo={deleteTodo}
              clearCompleted={clearCompleted}
              changeFilter={changeFilter}
              filter={filter}
              forLeftItems={todos}
              />
      </div>
    </div>
  )
}

export default App