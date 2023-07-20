import { useState } from "react";
import TextArea from "../text-area/text-area.component";
import { SelectFood } from "../select/select.component";
import BtnContainer from "../btn-container/btn-container.component";

const CreateForm = ({ tableContent, setTableContent }) => {
  const [state, setState] = useState({ day:'', meal:'', boxContent:'', alert:false })

  const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
  const meals = ['Breakfast', 'Lunch', 'Dinner']

  const handleSubmit = event => {
    event.preventDefault();
    const { day, meal, boxContent } = state

    if ((day !== '') && (meal !== '') && (boxContent !== '')) {
      const updatedTableContent = {
        ...tableContent,
        [day]: {
          ...tableContent[day],
          [meal]: {
            ...tableContent[day][meal],
            content: boxContent,
          },
        }
      };
      
      setTableContent(updatedTableContent);
      setState({day:'', meal:'', boxContent:''})
    } else {
      setState(prev => {return {...prev, alert:true}})
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
          <SelectFood
            value={state.day}
            name='day'
            change={handleChange}
            optArr={days}
          />

          <SelectFood
            value={state.meal}
            name='meal'
            change={handleChange}
            optArr={meals}
          />
        </section>

        {state.alert ? (
          <div className='mt-16 font-semibold text-xs text-center text-red-600'>
            *Select Day, Meal, and Content*
          </div>) : null
        }

        <BtnContainer form="default" setState={setState} />
      </form>
    </div>
  )
}

export default CreateForm;
