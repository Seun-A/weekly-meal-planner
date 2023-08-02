import ChecklistItem from '../checklist-item/checklist-item.component';
import { useSelector } from 'react-redux'


const GroceryList = () => {
  const checklist = useSelector(state => state.checklist).arr
  
  return (
  <div className="grocery-list absolute w-48 top-72 mt-5">
    <div className={`
      font-['Cookie'] text-2xl tracking-wider mb-2 text-center
    `}>Grocery List</div>

    <form className='h-72 overflow-scroll'>
      {checklist.map((e, i) => <ChecklistItem key={i} value={e} />)}
    </form>
  </div>
)}

export default GroceryList;
