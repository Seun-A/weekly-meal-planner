import { useState } from "react";
import BtnContainer from "../btn-container/btn-container.component";
import TextArea from "../text-area/text-area.component";

const AltForm = ({
    tableContent, setTableContent, showAltForm, toggleShowAltForm
  }) => {

  let { meal, day, content } = showAltForm

  let [altState, setAltState] = useState({init: content})

  const handleSubmit = event => {
    event.preventDefault();

    setAltState({init:content})
    toggleShowAltForm('', '', '', false)

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
  }
  
  const handleChange = event => {
    const { value } = event.target
    toggleShowAltForm(meal, day, value, true)
  }

  return (
    <div className="form-container">
      <div className={`
        font-semibold text-sm mb-2 
      `}>Edit {showAltForm.meal} for {showAltForm.day}</div>
      <form onSubmit={handleSubmit}>
        <TextArea value={showAltForm.content} onChange={handleChange} />

        <BtnContainer 
          altState={altState} 
          setAltState={setAltState} 
          showAltForm={showAltForm} 
          toggleShowAltForm={toggleShowAltForm}
        />
      </form>
    </div>
  )
}

export default AltForm
