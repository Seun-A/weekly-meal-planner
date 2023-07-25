const Box = ({ meal, day, index, setEditForm, setEditFormVisible, editForm, table}) => {
  const handleClick = () => {
    setEditForm({ meal:meal, day:day, content:table[day][meal] })
    setEditFormVisible(true)
    document.getElementById('text-area').focus()
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
      ${day !== 'Sun' ? 'border-b-2' : null}
      ${index !==2 ? 'border-e-2' : null}
      ${
        day === 'Mon' && index === 0 ? 'rounded-tl-3xl':
        day === 'Mon' && index === 2 ? 'rounded-tr-3xl':
        day === 'Sun' && index === 0 ? 'rounded-bl-3xl':
        day === 'Sun' && index === 2 ? 'rounded-br-3xl': null
      }
    `}
    onPointerDown={handleClick}
    value={contentToShow}
    disabled
    />
  )
}

export default Box;
