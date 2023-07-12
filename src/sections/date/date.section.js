import SelectMonth from "../../components/select-month/select-month.component";
import SelectWeek from "../../components/select-week/select-week.component";

const DateSection = () => (
  <div className="date-section flex">
    <SelectMonth />
    <SelectWeek />
  </div>
)

export default DateSection
