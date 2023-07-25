import { useState } from "react";
import TextArea from "../text-area/text-area.component";
import Select from "../select/select.component";
import BtnContainer from "../btn-container/btn-container.component";
import { useDispatch } from 'react-redux'
import { mealCreated } from "../../redux/form-create/form-create.slice";

const CreateForm = ({ submit }) => {
  const [state, setState] = useState({ day:'', meal:'', boxContent:'' })
  const [alert, setAlert] = useState(false)

  const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
  const meals = ['Breakfast', 'Lunch', 'Dinner']
  
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault();
    const { day, meal, boxContent } = state

    if ((day) && (meal) && (boxContent)) {
      submit(day, meal, boxContent);

      dispatch(
        mealCreated({
          day: day,
          [meal]: boxContent
        })
      )
      
      setState({day:'', meal:'', boxContent:''})
      setAlert(false)
    } else {
      setAlert(true)
    }
  }

  const handleChange = event => {
    const { value, name } = event.target
    setState( prev => {return {...prev, [name]:value}} )
  }


  return (
    <div className="form-container">
      <div className='font-semibold text-sm mb-2'>Add a meal</div>
      <form onSubmit={handleSubmit}>
        <TextArea value={state.boxContent} onChange={handleChange} />

        <section className="mt-6 flex justify-between">
          <Select
            value={state.day}
            name='day'
            onChange={handleChange}
            optArr={days}
          />

          <Select
            value={state.meal}
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

        <BtnContainer form="default" setState={setState} setAlert={setAlert} />
      </form>
    </div>
  )
}

export default CreateForm;
