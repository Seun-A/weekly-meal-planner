import DefaultForm, { AltForm } from "../forms/forms.component";

const Sidebar = ({ tableContent, setTableContent }) => (
  <div className="bg-white mt-6 ms-3 rounded-3xl py-8 px-6 w-60 relative">
    <DefaultForm tableContent={tableContent} setTableContent={setTableContent} />
  </div>
)

export default Sidebar;
