import { useState } from "react";
import BtnContainer from "../btn-container/btn-container.component";
import TextArea from "../text-area/text-area.component";

const EditForm = ({
    setEditFormVisible, editForm, setEditForm, submit
  }) => {

  let { meal, day, content } = editForm

  let [editState, setEditState] = useState({init: content})

  const handleSubmit = event => {
    event.preventDefault();

    setEditState({init:content})
    submit(day, meal, content)

    setEditForm({ meal:'', day:'', content:'' })
    setEditFormVisible(false)
    
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
          editState={editState} 
          editForm={editForm} 
          setEditFormVisible={setEditFormVisible}
          setEditForm={setEditForm}
        />
      </form>
    </div>
  )
}

export default EditForm
