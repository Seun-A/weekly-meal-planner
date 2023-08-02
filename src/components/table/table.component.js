import { useSelector } from 'react-redux'
import Box from '../box/box.component';

const Table = () => {
  const table = useSelector(state => state.table)

  const tableBoxes = Object.entries(table).map(([day, meals], i1) => {
    const mealBoxes = Object.entries(meals).map(([meal], i2) => (
      <Box key={i2} day={day} meal={meal} />
    ));

    return (
      <div className={`
        grid group
        grid-cols-[1.5rem,100px,100px,100px]
        md:grid-cols-[1.5rem,150px,150px,150px]
      `} key={i1}>
        <div className="-rotate-90 translate-y-9 -translate-x-9 text-center h-6 w-24 text-sm">{day}</div>
        {mealBoxes}
      </div>
    );
  });

  return (
    <div className="meal-table">
      <div className={`
        grid 
        grid-cols-[1.5rem,100px,100px,100px]
        md:grid-cols-[1.5rem,150px,150px,150px]
      `}>
        <div className="h-6 w-6"></div>
        <div className="text-sm text-center">Breakfast</div>
        <div className="text-sm text-center">Lunch</div>
        <div className="text-sm text-center">Dinner</div>
      </div>

      { tableBoxes }
    </div>
  )
}

export default Table;
