import './Form.scss'

const Form = ({inpText, handleInpText,addTodo,validationError}) => {
  return (
    <form onSubmit={addTodo} action="" className={validationError ? 'form-error' : ''}>
      <p className='validation-alert'>{validationError}</p>
      <input 
            autoFocus 
            type="text" 
            placeholder='create a new todo…' 
            value={inpText}
            onChange={handleInpText}
            />
      <button>create</button>
    </form>
  )
}

export default Form