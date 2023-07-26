import Box from '../box/box.component';

const Table = ({ initTable, ...props }) => {
  const tableBoxes = Object.entries(initTable).map(([day, meals], i) => {
    const mealBoxes = Object.entries(meals).map(([meal], index) => (
      <Box key={index} day={day} meal={meal} {...props} />
    ));

    return (
      <div className='grid group grid-cols-[1.5rem,150px,150px,150px]' key={i}>
        <div className="-rotate-90 translate-y-9 -translate-x-9 text-center h-6 w-24 text-sm">{day}</div>
        {mealBoxes}
      </div>
    );
  });

  return (
    <div className="meal-table">
      <div className="grid grid-cols-[1.5rem,150px,150px,150px]">
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
