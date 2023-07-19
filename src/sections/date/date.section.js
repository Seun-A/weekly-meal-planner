import { useState } from "react";
import Select from "../../components/select/select.component";

const DateSection = () => {
  // Show current month
  const monthNames = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
  const currentMonth = monthNames[new Date().getMonth()];
  
  // Show the current week number
  const currDate = new Date();
  const currYear = currDate.getFullYear();
  const currMonth = currDate.getMonth();
  const firstDayOfMonth = new Date(currYear, currMonth, 1);
  const currDay = currDate.getDate();
  const daysIntoMonth = currDay + firstDayOfMonth.getDay() - 1;
  
  const weekArr = [1, 2, 3, 4, 5, 6];
  const placeholderWeek = Math.ceil(daysIntoMonth / 7);
  
  const [state, setState] = useState({ month:currentMonth, week: placeholderWeek})

  const handleChange = event => {
    const { value, name } = event.target
    setState( prev => {return {...prev, [name]:value}} )
  }

  
  return (
    <div className="date-section flex">
      <Select
        value={state.month}
        name='month'
        label='Month: '
        optArr={monthNames}
        onChange={handleChange}
      />
      <Select
        value={state.week}
        name='week'
        label='Week: '
        optArr={weekArr}
        onChange={handleChange}
      />
    </div>
  )
}

export default DateSection
