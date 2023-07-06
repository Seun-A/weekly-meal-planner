import ChecklistItem from '../checklist-item/checklist-item.component';

const GroceryList = () => (
  <div className="bg-white mt-6 ms-3 rounded-3xl p-3 w-36">
    <div className={`
      cookie-font text-2xl tracking-wider mb-2 text-center
    `}>Grocery List</div>

    <form>
      {[1, 2, 3, 4, 5].map((e, i) => <ChecklistItem key={i} />)}
    </form>
  </div>
)

export default GroceryList;
