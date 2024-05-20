import './Todos.scss'
import cross from '../../assets/icons/cross.svg'

const Todos = ({todos,changeCheckboxStatus,deleteTodo}) => {
  return (
    <div className='todos'>
      {todos.map((todo) => {
          return(
            <div className='todo' key={todo.id}>
              <div className='item'>
                <input checked={todo.isCompleted} type="checkbox" onChange={() => {changeCheckboxStatus(todo.id)}} />
                <p>{todo.todoTitle}</p>
              </div>
              <div onClick={() => {deleteTodo(todo.id)}}>
                <svg fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve">
                  <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "/>
                </svg>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Todos