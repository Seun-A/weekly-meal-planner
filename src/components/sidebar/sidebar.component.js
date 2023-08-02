import { useSelector } from 'react-redux'
import EditForm from "../form-edit/form-edit.component";
import CreateForm from "../form-create/form-create.component";

const Sidebar = () => {
  const isEditVisible = useSelector(state => state.edit).visible
  
  return (
    <div
      className={`sidebar bg-white
        mt-6 ms-3 py-8 px-6
        
        fixed md:relative

        border border-gray-300 md:border-0  
        rounded-3xl

        w-60 min-h-[50%]
        top-[50%] md:top-0
        -translate-y-[50%] md:-translate-y-0

        ${isEditVisible ? 'visible' : 'invisible md:visible'}
      `}
    >
      {
        isEditVisible ? 
          <EditForm />
        :
          <CreateForm />
      }
    </div>
  )
}

export default Sidebar;
