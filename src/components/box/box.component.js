const Box = ({rounded, b, e, meal, day, content, setEditForm, setEditFormVisible, editForm}) => {
  const handleClick = () => {
    setEditForm({ meal:meal, day:day, content:content })
    setEditFormVisible(true)
  }

  const contentToShow = editForm.meal === meal && editForm.day === day ? editForm.content : content;

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
      ${b ? 'border-b-2' : null}
      ${e ? 'border-e-2' : null}
      ${
        rounded === 'tr' ? 'rounded-tr-3xl':
        rounded === 'tl' ? 'rounded-tl-3xl':
        rounded === 'br' ? 'rounded-br-3xl':
        rounded === 'bl' ? 'rounded-bl-3xl': null
      }
    `}
    onPointerDown={handleClick}
    value={contentToShow}
    disabled
    />
  )
}

export default Box;
