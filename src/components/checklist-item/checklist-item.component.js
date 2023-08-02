const ChecklistItem = ({ value }) => (
  <div className='checklist-item flex  text-xs mb-4'>
    <input type='checkbox' className='checkbox basis-1/3 accent-[#EFE1DA]' />
    <div type='text' className='w-20 border-b border-gray-400'>{value}</div>
  </div>
)

export default ChecklistItem;
