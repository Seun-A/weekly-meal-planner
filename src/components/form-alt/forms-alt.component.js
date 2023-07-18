import { useState } from "react";
import BtnContainer from "../btn-container/btn-container.component";
import TextArea from "../text-area/text-area.component";

const AltForm = ({
    tableContent, setTableContent, setAltShow, altForm, setAltForm
  }) => {

  let { meal, day, content } = altForm

  let [altState, setAltState] = useState({init: content})

  const handleSubmit = event => {
    event.preventDefault();

    setAltState({init:content})
    setAltForm({ meal:'', day:'', content:'' })
    setAltShow(false)
    
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
    setAltForm({ meal:meal, day:day, content:value })
    setAltShow(true)
  }

  return (
    <div className="form-container">
      <div className={`
        font-semibold text-sm mb-2 
      `}>Edit {altForm.meal} for {altForm.day}</div>
      <form onSubmit={handleSubmit}>
        <TextArea value={altForm.content} onChange={handleChange} />

        <BtnContainer 
          altState={altState} 
          setAltState={setAltState} 
          altForm={altForm} 
          setAltShow={setAltShow}
          setAltForm={setAltForm}
        />
      </form>
    </div>
  )
}

export default AltForm
