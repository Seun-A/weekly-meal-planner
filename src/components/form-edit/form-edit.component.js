import { useState } from "react";
import BtnContainer from "../btn-container/btn-container.component";
import TextArea from "../text-area/text-area.component";

const EditForm = ({
    tableContent, setTableContent, setEditFormVisible, editForm, setEditForm
  }) => {

  let { meal, day, content } = editForm

  let [altState, setAltState] = useState({init: content})

  const handleSubmit = event => {
    event.preventDefault();

    setAltState({init:content})
    setEditForm({ meal:'', day:'', content:'' })
    setEditFormVisible(false)
    
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
    setEditForm({ meal:meal, day:day, content:value })
    setEditFormVisible(true)
  }

  return (
    <div className="form-container">
      <div className={`
        font-semibold text-sm mb-2 
      `}>Edit {editForm.meal} for {editForm.day}</div>
      <form onSubmit={handleSubmit}>
        <TextArea value={editForm.content} onChange={handleChange} />

        <BtnContainer 
          altState={altState} 
          setAltState={setAltState} 
          editForm={editForm} 
          setEditFormVisible={setEditFormVisible}
          setEditForm={setEditForm}
        />
      </form>
    </div>
  )
}

export default EditForm
