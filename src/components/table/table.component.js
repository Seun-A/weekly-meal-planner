import Box from '../box/box.component';

const Table = ({ initTable, ...props }) => {
  const tableBoxes = Object.entries(initTable).map(([day, meals], i) => {
    const mealBoxes = Object.entries(meals).map(([meal], index) => (
      <Box key={index} index={index} meal={meal} day={day} {...props} />
    ));

    // Returns a warning, to be fixed in the future ...maybe
    return (
      <>
        <div key={i} className="-rotate-90 translate-y-9 -translate-x-9 text-center h-6 w-24 text-sm">{day}</div>
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

      { tableBoxes }
    </div>
  )
}

export default Table;
