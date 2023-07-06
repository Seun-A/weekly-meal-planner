import MonthPicker from "../../components/month-picker/month-picker.component";
import WeekPicker from "../../components/week-picker/week-picker.component";

import './date.style.css'

const DateSection = () => (
  <div className="date-section flex">
    <MonthPicker />
    <WeekPicker />
  </div>
)

export default DateSection
