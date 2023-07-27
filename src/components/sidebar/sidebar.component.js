import { useSelector } from 'react-redux'
import EditForm from "../form-edit/form-edit.component";
import CreateForm from "../form-create/form-create.component";

const Sidebar = () => (
  <div
    className={`sidebar
      relative bg-white
      mt-6 ms-3 rounded-3xl
      py-8 px-6 w-60
    `}
  >
    {
      useSelector(state => state.edit).visible ? 
        <EditForm />
      :
        <CreateForm />
    }
  </div>
)

export default Sidebar;
