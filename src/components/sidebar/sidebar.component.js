import DefaultForm from "../form-def/form-def.component";
import AltForm from "../form-alt/forms-alt.component";

const Sidebar = ({ tableContent, setTableContent, showAltForm, toggleShowAltForm }) => (
  <div
    className={`
      sidebar
      relative bg-white
      mt-6 ms-3 rounded-3xl
      py-8 px-6 w-60
    `}
  >
    {
      showAltForm.showAlt ? 
        <AltForm
          showAltForm={showAltForm}
          toggleShowAltForm={toggleShowAltForm}
          tableContent={tableContent}
          setTableContent={setTableContent}
        />
      :
        <DefaultForm
          tableContent={tableContent}
          setTableContent={setTableContent}
        />
    }
  </div>
)

export default Sidebar;
