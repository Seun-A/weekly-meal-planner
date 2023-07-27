import { useDispatch, useSelector } from 'react-redux'
import { mealCreated } from "../../redux/table/table.slice";
import { setEdit, hideEdit } from "../../redux/edit/edit.slice";

import BtnContainer from "../btn-container/btn-container.component";
import TextArea from "../text-area/text-area.component";

const EditForm = () => {
  const { meal, day, content } = useSelector(state => state.edit)

  const dispatch = useDispatch()

  const handleSubmit = event => {
    if (event) { event.preventDefault() }

    dispatch(mealCreated({day, meal, content}))
    dispatch(hideEdit())
  }
  
  const handleChange = event => {
    const { value } = event.target
    dispatch(setEdit({ meal, day, content:value }));
  }
  
  const cancel = event => {
    if (event) { event.preventDefault() }
    
    dispatch(setEdit({ meal:'', day:'', content:'' }));
    dispatch(hideEdit());
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSubmit.call()
    }
    if (event.key === 'Escape') {
      cancel.call()
    }
  }

  return (
    <div className="form-container">
      <div className={`
        font-semibold text-sm mb-2 
      `}>Edit {meal} for {day}</div>
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <TextArea value={content} onChange={handleChange} />

        <BtnContainer cancel={cancel} />
      </form>
    </div>
  )
}

export default EditForm
