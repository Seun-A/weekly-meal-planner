import Select from "../select/select.component";

const monthNames = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
const placeholder = monthNames[new Date().getMonth()];

const MonthPicker = () => (
  <Select
    addedClasses="month-picker w-16 ms-2"
    placeholder={placeholder}
    optArr={monthNames}
    label="Month:"
  />
)

export default MonthPicker;
