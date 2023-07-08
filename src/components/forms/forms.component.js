import { useState } from "react";

const DefaultForm = ({ tableContent, setTableContent }) => {
  const [state, setState] = useState({ day:'', meal:'', boxContent:'' })

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
      },
    };

    setTableContent(updatedTableContent);
  }

  const handleChange = event => {
    const { value, name } = event.target
    setState( prev => {return {...prev, [name]:value}} )
  }


  return (
    <div>
      <div className={`
        font-semibold text-sm mb-2 
      `}>Add a meal</div>
      <form onSubmit={handleSubmit}>
        <textarea
          className={`
            h-28 w-full border border-black rounded-lg resize-none text-xs py-2 px-3
            focus:outline-none
            hover:border-red-400/25 focus:border-red-400/25 active:border-red-400/25
            transition-colors duration-300
          `}
          name="boxContent"
          type = "text"
          placeholder="e.g. Sunny side up"
          onChange={handleChange}
        />

        <section className="mt-6 flex justify-between">
          <textarea 
            className={`
              resize-none border-b border-black h-5 w-16 text-xs focus:outline-none
            `}
            name="day"
            placeholder="Day"
            onChange={handleChange}
          />
          <textarea 
            className={`
              resize-none border-b border-black h-5 w-16 text-xs focus:outline-none
            `}
            name="meal"
            onChange={handleChange}
            placeholder="Meal"
          />
        </section>

        <button className={`
          bg-red-50 
          absolute 

          block w-48 top-60 py-2 shadow-md rounded-md text-sm font-semibold

          transition duration-200

          hover:bg-red-400/50

          focus:outline-none active:translate-y-1
        `}
        >Submit</button>
      </form>
    </div>
  )
}



const AltForm = () => {
  const [state, setState] = useState({ day:'', meal:'', boxContent:'' })

  const handleSubmit = async event => {
    event.preventDefault();

    const { day, meal, boxContent } = state

    console.log(`Day: ${day}
    \nMeal: ${meal}
      \nDish ${boxContent}
    `)
  }

  const handleChange = event => {
    const { value, name } = event.target
    setState( prev => {return {...prev, [name]:value}} )
  }

  return (
    <div>
      <div className={`
        font-semibold text-sm mb-2 
      `}>Edit Breakfast for Saturday</div>
      <form onSubmit={handleSubmit}>
        <textarea
          className={`
            h-28 w-full border border-black rounded-lg resize-none text-xs py-2 px-3
            focus:outline-none
            hover:border-red-400/25 focus:border-red-400/25 active:border-red-400/25
            transition-colors duration-300
          `}
          name="boxContent"
          type = "text"
          placeholder="e.g. Sunny side up"
          onChange={handleChange}
        />

        <button className={`
          bg-red-50 
          absolute 

          block w-48 top-60 py-2 shadow-md rounded-md text-sm font-semibold

          transition duration-200

          hover:bg-red-400/50

          focus:outline-none active:translate-y-1
        `}
        >Submit</button>
      </form>
    </div>
  )
}


export default DefaultForm
export { AltForm }
