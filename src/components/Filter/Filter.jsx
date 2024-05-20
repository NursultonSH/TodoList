import './Filter.scss'

const filterItems = [
  {
    title:'All'
  },
  {
    title:'Active'
  },
  {
    title:'Completed'
  },
]


const Filter = ({changeFilter,filter}) => {

  let items = filterItems.map((item) => {
    const activeClass = filter === item.title ? 'active' : null
    return(
      <li
        className={activeClass}
        onClick={() => {changeFilter(item.title)}}
      >{item.title}</li>
    )
  })

  return (
    <ul className='filter'> 
      {items}
    </ul>
  )
}

export default Filter