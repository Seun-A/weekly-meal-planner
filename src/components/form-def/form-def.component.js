import { useState } from "react";
import BtnContainer from "../btn-container/btn-container.component";

const DefaultForm = ({ tableContent, setTableContent }) => {
  const [state, setState] = useState({ day:'Mon', meal:'Breakfast', boxContent:'' })

  const handleSubmit = event => {
    event.preventDefault();
    
    const { day, meal, boxContent } = state
    
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
    setState(prev => {return {...prev, boxContent:'' }})
  }

  const handleChange = event => {
    const { value, name } = event.target
    setState( prev => {return {...prev, [name]:value}} )
  }

  const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
  const meals = ['Breakfast', 'Lunch', 'Dinner']


  return (
    <div className="form-container">
      <div className='font-semibold text-sm mb-2'>Add a meal</div>
      <form onSubmit={handleSubmit}>
        <textarea
          name="boxContent"
          type = "text"
          className={`
            h-28 w-full border border-black rounded-lg resize-none text-xs py-2 px-3
            focus:outline-none
            hover:border-red-400/25 focus:border-red-400/25 active:border-red-400/25
            transition-colors duration-300
          `}
          value={state.boxContent}
          placeholder="e.g. Sunny side up"
          onChange={handleChange}
        />

        <section className="mt-6 flex justify-between">
          <select name='day' onChange={handleChange} id="select-day"
            className="text-xs cursor-pointer focus:outline-none
            transition duration-300 hover:border-b-red-400
            -webkit-appearance: none w-16

            bg-transparent border-b border-black text-sm py-1 -translate-y-1">
            <option
              defaultValue
              value=""
              key={0}
              disabled
            >Day</option>
            {days.map((day, i) => <option value={day} key={i+1}>{day}</option>)}
          </select>

          <select name='meal' onChange={handleChange} id="select-meal"
            className="text-xs cursor-pointer focus:outline-none
            transition duration-300 hover:border-b-red-400
            -webkit-appearance: none w-20

            bg-transparent border-b border-black text-sm py-1 -translate-y-1">
            <option
              defaultValue
              value=""
              key={0}
              disabled
            >Meal</option>
            {meals.map((meal, i) => <option value={meal} key={i+1}>{meal}</option>)}
          </select>
        </section>

        <BtnContainer state={state} setState={setState} form="default" />
      </form>
    </div>
  )
}

export default DefaultForm;
