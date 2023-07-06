import { useState } from "react";

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

const WeekPicker = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);

    const optOne = document.getElementById('week-opt-one');
    if (optOne) {
      const monthSelect = document.getElementById('week-select');
      monthSelect.removeChild(optOne);
    }
  };
  
  return (
    <div className="picker week-picker text-sm">
      Week: 
      <select
        id="week-select"
        className="w-10 ms-1 bg-transparent border-b border-b-gray-900 text-sm "
        value={selectedOption} onChange={handleChange}
      >
        <option
          defaultValue
          value=""
          key={1}
          id="week-opt-one"
          disabled
        >{placeholder}</option>
        {weekArr.map((month, i) => <option key={i+1} value={i}>{month}</option>)}
      </select>    
    </div>
  )
}

export default WeekPicker;
