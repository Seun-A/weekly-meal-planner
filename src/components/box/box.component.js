import React from 'react'

const Box = ({ meal, day, setEditForm, setEditFormVisible, editForm, table}) => {
  const handleClick = () => {
    setEditForm({ meal:meal, day:day, content:table[day][meal] })
    setEditFormVisible(true)
  }

  const contentToShow = editForm.meal === meal && editForm.day === day ? editForm.content : table[day][meal];

  const bg = editForm.showAlt ?
    editForm.meal === meal && editForm.day === day ?
      'bg-red-50' :
      'bg-white' :
    'bg-white'

    
  return (
    <textarea className={`
      table-box resize-none
      py-2 px-3 text-xs ${bg} border-dotted border-gray-400
      hover:bg-red-50 cursor-pointer
      active:bg-red-100
      h-24
      
      border-b-2
      group-[&:nth-child(8)]:border-b-0
      border-e-2
      [&:nth-child(4)]:border-e-0

      group-[&:nth-child(2)]:[&:nth-child(2)]:rounded-tl-3xl
      group-[&:nth-child(2)]:[&:nth-child(4)]:rounded-tr-3xl
      group-[&:nth-child(8)]:[&:nth-child(2)]:rounded-bl-3xl
      group-[&:nth-child(8)]:[&:nth-child(4)]:rounded-br-3xl
    `}
    onPointerDown={handleClick}
    value={contentToShow}
    disabled
    />
  )
}

export default Box;
