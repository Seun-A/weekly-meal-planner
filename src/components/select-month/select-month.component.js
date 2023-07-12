import { SelectTime } from "../select/select.component";

const monthNames = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
const placeholder = monthNames[new Date().getMonth()];

const SelectMonth = () => (
  <SelectTime
    addedClasses="month-picker w-16 ms-2"
    placeholder={placeholder}
    optArr={monthNames}
    label="Month:"
  />
)

export default SelectMonth;
