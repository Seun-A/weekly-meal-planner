import './checklist-item.style.css'

const ChecklistItem = () => (
  <div className='checklist-item flex justify-around text-xs mb-4'>
    <input type='checkbox' className='checkbox basis-1/6' />
    <input type='text' className='w-20 border-b border-gray-400 ' />
  </div>
)

export default ChecklistItem;
