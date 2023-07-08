const Box = ({rounded, extended, b, e, content, meal, day, toggleShowAltForm}) => {
  const handleClick = () => {
    toggleShowAltForm(meal, day, content, true);
  }

  return (
    <textarea className={`
      table-box resize-none

      py-2 px-3 text-xs bg-white border-dotted border-gray-400

      hover:bg-red-50 cursor-pointer
      active:bg-red-100

      ${rounded ? `rounded-${rounded}-3xl` : ""}

      h-${extended ? "28" : "24"}
      
      ${b ? 'border-b-2' : null}

      ${e ? 'border-e-2' : null}
    `}
    onPointerDown={handleClick}
    value={content}
    disabled
    />
  )
}

export default Box;
