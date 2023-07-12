import DefaultForm from "../form-def/form-def.component";
import AltForm from "../form-alt/forms-alt.component";

const Sidebar = ({ showAltForm, ...props }) => (
  <div
    className={`sidebar
      relative bg-white
      mt-6 ms-3 rounded-3xl
      py-8 px-6 w-60
    `}
  >
    {
      showAltForm.showAlt ? 
        <AltForm showAltForm={showAltForm} {...props} />
      :
        <DefaultForm {...props} />
    }
  </div>
)

export default Sidebar;
