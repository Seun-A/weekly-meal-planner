const Box = ({rounded, b, e, meal, day, content, toggleShowAltForm, showAltForm}) => {
  const handleClick = () => {
    toggleShowAltForm(meal, day, content, true);
  }

  const contentToShow = showAltForm.meal === meal && showAltForm.day === day ? showAltForm.content : content;

  const bg = showAltForm.showAlt ?
    showAltForm.meal === meal && showAltForm.day === day ?
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
