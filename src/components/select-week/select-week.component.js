import { SelectTime } from "../select/select.component";

// Show the current week number
const currDate = new Date();
const currYear = currDate.getFullYear();
const currMonth = currDate.getMonth();
const firstDayOfMonth = new Date(currYear, currMonth, 1);
const currDay = currDate.getDate();
const daysIntoMonth = currDay + firstDayOfMonth.getDay() - 1;

const weekArr = [1, 2, 3, 4, 5, 6];
const placeholder = Math.ceil(daysIntoMonth / 7);

const SelectWeek = () => (
  <SelectTime
    addedClasses="select-week w-8 ms-2"
    optArr={weekArr}
    placeholder={placeholder}
    label="Week:"
  />
)

export default SelectWeek;
