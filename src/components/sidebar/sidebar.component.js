import { useSelector } from 'react-redux'

import EditForm from "../form-edit/form-edit.component";
import CreateForm from "../form-create/form-create.component";
import GroceryList from '../grocery-list/grocery-list.component';

const Sidebar = () => {
  const isEditVisible = useSelector(state => state.edit).visible
  
  return (
    <div
      className={`sidebar
        relative bg-white
        mt-6 ms-3 rounded-3xl
        py-8 px-6 w-60
      `}
    >
      {
        isEditVisible ? 
          <EditForm />
        :
          <CreateForm />
      }
      <GroceryList />
    </div>
  )
}

export default Sidebar;
