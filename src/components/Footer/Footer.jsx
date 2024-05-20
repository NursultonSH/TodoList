import './Footer.scss'
import Filter from '../Filter/Filter'

const Footer = ({todos,clearCompleted,changeFilter,filter,forLeftItems}) => {

   const newTodos = forLeftItems.filter((todo) => {
    if (!todo.isCompleted) {
      return todo
    }
   })

  return (
    <footer>
        <p className='items'><span>{newTodos.length}</span> items left</p>
        <div className='desktop-filter'>
          <Filter changeFilter={changeFilter} filter={filter} />
        </div>
        <p onClick={clearCompleted} className='clear'>Clear Completed</p>
    </footer>
  )
}

export default Footer