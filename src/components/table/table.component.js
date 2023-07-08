import './table.style.css';
import Box from '../box/box.component';

const Table = ({ tableContent }) => {
  const table = Object.entries(tableContent).map(([day, meals], i1) => {
    const mealBoxes = Object.entries(meals).map(([meal, {...props}], i2) => (
      <Box key={i2} {...props} />
    ));

    // Returns a warning, to be fixed in the future
    return (
      <>
        <div key={i1} className="-rotate-90 translate-y-9 -translate-x-9 text-center h-6 w-24 text-sm">{day}</div>
        {mealBoxes}
      </>
    );
  });

  return (
    <div className="meal-table grid grid-cols-[1.5rem,150px,150px,150px]">
      <div className="h-6 w-6"></div>
      <div className="text-sm text-center">Breakfast</div>
      <div className="text-sm text-center">Lunch</div>
      <div className="text-sm text-center">Dinner</div>

      { table }
    </div>
  )
}

export default Table;
