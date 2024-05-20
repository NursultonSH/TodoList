import './Main.scss'


// components
import Footer from '../Footer/Footer'
import Todos from '../Todos/Todos'
import Filter from '../Filter/Filter'


const Main = ({todos,changeCheckboxStatus,deleteTodo,clearCompleted,changeFilter,filter,forLeftItems}) => {
  return (
    <>
      <main>
          <Todos 
                todos={todos} 
                changeCheckboxStatus={changeCheckboxStatus}
                deleteTodo={deleteTodo}
                />
          <Footer
                forLeftItems={forLeftItems}
                clearCompleted={clearCompleted}
                changeFilter={changeFilter}
                filter={filter}
           />
      </main>
      <div className='filter-box'>
        <Filter 
              changeFilter={changeFilter} 
              filter={filter}
              />  
      </div>
    </>
  )
}

export default Main