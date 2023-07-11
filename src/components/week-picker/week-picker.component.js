import Select from "../select/select.component";

// Show the current week number
const currDate = new Date();
const currYear = currDate.getFullYear();
const currMonth = currDate.getMonth();
const firstDayOfMonth = new Date(currYear, currMonth, 1);
const lastDayOfMonth = new Date(currYear, currMonth + 1, 0);
const currDay = currDate.getDate();
const daysIntoMonth = currDay + firstDayOfMonth.getDay() - 1;
const numberOfWeeks = Math.ceil((lastDayOfMonth.getDate() + firstDayOfMonth.getDay()) / 7);

const weekArr = Array.from({ length: numberOfWeeks }, (_, index) => index + 1);
const placeholder = Math.ceil(daysIntoMonth / 7);

const WeekPicker = () => (
  <Select
    addedClasses="select-week w-8 ms-2"
    optArr={weekArr}
    placeholder={placeholder}
    label="Week:"
  />
)

export default WeekPicker;
