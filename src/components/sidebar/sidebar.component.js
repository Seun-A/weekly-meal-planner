import DefaultForm from "../form-def/form-def.component";
import AltForm from "../form-alt/forms-alt.component";

const Sidebar = ({ altShow, ...props }) => (
  <div
    className={`sidebar
      relative bg-white
      mt-6 ms-3 rounded-3xl
      py-8 px-6 w-60
    `}
  >
    {
      altShow ? 
        <AltForm altShow={altShow} {...props} />
      :
        <DefaultForm {...props} />
    }
  </div>
)

export default Sidebar;
