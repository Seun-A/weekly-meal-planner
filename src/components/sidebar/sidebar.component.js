import EditForm from "../form-edit/form-edit.component";
import CreateForm from "../form-create/form-create.component";
import { useSelector } from 'react-redux'

const Sidebar = ({ editFormVisible, ...props }) => {
  const createForm = useSelector(state => state.formCreate)

  const {Breakfast, Lunch, Dinner} = createForm.Mon
  console.log(createForm.Mon)
  return (
  <div
    className={`sidebar
      relative bg-white
      mt-6 ms-3 rounded-3xl
      py-8 px-6 w-60
    `}
  >
    {
      editFormVisible ? 
        <EditForm {...props} />
      :
        <CreateForm {...props} />
    }
    <div className="mt-16 ">
      createForm: <br />
      day: '{Breakfast}' <br />
      meal: '{Lunch}' <br />
      content: '{Dinner}' <br />
    </div>
  </div>
)}

export default Sidebar;
