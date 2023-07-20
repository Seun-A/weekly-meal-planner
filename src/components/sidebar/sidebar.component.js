import DefaultForm from "../form-create/form-create.component";
import AltForm from "../form-edit/forms-edit.component";

const Sidebar = ({ editFormVisible, ...props }) => (
  <div
    className={`sidebar
      relative bg-white
      mt-6 ms-3 rounded-3xl
      py-8 px-6 w-60
    `}
  >
    {
      editFormVisible ? 
        <AltForm {...props} />
      :
        <DefaultForm {...props} />
    }
  </div>
)

export default Sidebar;
