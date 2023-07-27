import { useState } from "react";
import { useDispatch } from 'react-redux';

import TextArea from "../text-area/text-area.component";
import Select from "../select/select.component";
import BtnContainer from "../btn-container/btn-container.component";
import { mealCreated } from "../../redux/table/table.slice";

const CreateForm = () => {
  const [state, setState] = useState({ day:'', meal:'', content:'' })
  const [alert, setAlert] = useState(false)
  const { day, meal, content } = state

  const resetCreateForm = () => {
    setState({day:'', meal:'', content:''})
    setAlert(false)
  }

  const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
  const meals = ['Breakfast', 'Lunch', 'Dinner']
  
  const dispatch = useDispatch()

  const handleSubmit = event => {
    if (event) { event.preventDefault() }

    if ((day) && (meal) && (content)) {
      dispatch(mealCreated({ day, meal, content }));
      
      resetCreateForm()
    } else {
      setAlert(true)
    }
  }

  const handleChange = event => {
    const { value, name } = event.target
    console.log(value)
    setState( prev => {return {...prev, [name]:value}} )
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit.call()
    }
    if (event.key === 'Escape') {
      resetCreateForm()
    }
  }

  const cancel = event => {
    event.preventDefault()
    resetCreateForm()
  }

  return (
    <div className="form-container">
      <div className='font-semibold text-sm mb-2'>Add a meal</div>
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <TextArea value={content} onChange={handleChange} />

        <section className="mt-6 flex justify-between">
          <Select
            value={day}
            name='day'
            onChange={handleChange}
            optArr={days}
          />

          <Select
            value={meal}
            name='meal'
            onChange={handleChange}
            optArr={meals}
          />
        </section>

        {alert ? (
          <div className='mt-16 font-semibold text-xs text-center text-red-600'>
            *Select Day, Meal, and Content*
          </div>) : null
        }

        <BtnContainer cancel={cancel} />
      </form>
    </div>
  )
}

export default CreateForm;
