import { useState } from "react";

const monthNames = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
const placeholder = monthNames[new Date().getMonth()];

const MonthPicker = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);

    const optOne = document.getElementById('month-opt-one');
    if (optOne) {
      const monthSelect = document.getElementById('month-select');
      monthSelect.removeChild(optOne);
    }
  };
  
  return (
  <div className="picker month-picker me-3 text-sm">
    Month: 
    <select
      id="month-select"
      className="w-15 ms-1 bg-transparent border-b border-b-gray-900 text-sm"
      value={selectedOption}
      onChange={handleChange}
    >
      <option
        defaultValue
        value=""
        key={1}
        id="month-opt-one"
        disabled
      >{placeholder}</option>
      {monthNames.map((month, i) => <option key={i+1} value={i}>{month}</option>)}
    </select>    
  </div>
)}

export default MonthPicker;
