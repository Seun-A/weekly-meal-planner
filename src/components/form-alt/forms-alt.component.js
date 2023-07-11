import { useState } from "react";
import BtnContainer from "../btn-container/btn-container.component";

const AltForm = ({
    showAltForm, toggleShowAltForm, tableContent, setTableContent
  }) => {
  let { meal, day, content } = showAltForm

  let [altState, setAltState] = useState({init: content, final: ''})


  const handleSubmit = event => {
    event.preventDefault();

    
    toggleShowAltForm('', '', '', false)
  }
  
  const handleChange = event => {
    const updatedTableContent = {
      ...tableContent,
      [day]: {
        ...tableContent[day],
        [meal]: {
          ...tableContent[day][meal],
          content: content,
        },
      },
    };
    setTableContent(updatedTableContent)

    console.log(altState)

    
    const { value } = event.target
    toggleShowAltForm(meal, day, value, true)
  }

  return (
    <div className="form-container">
      <div className={`
        font-semibold text-sm mb-2 
      `}>Edit {showAltForm.meal} for {showAltForm.day}</div>
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
          value={showAltForm.content}
          placeholder="e.g. Sunny side up"
          onChange={handleChange}
        />

        <BtnContainer altState={altState} setAltState={setAltState} showAltForm={showAltForm} toggleShowAltForm={toggleShowAltForm} />
      </form>
    </div>
  )
}


export default AltForm

