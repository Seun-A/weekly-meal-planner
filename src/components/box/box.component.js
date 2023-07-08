import './box.style.css'

const Box = ({rounded, extended, b, e, content}) => {

  return (
    <textarea className={`
      table-box resize-none

      py-2 px-3 text-xs bg-white border-dotted border-gray-400

      hover:bg-red-50 cursor-pointer
      active:bg-red-100

      ${rounded ? `rounded-${rounded}-3xl` : ""}

      h-${extended ? 28 : 24}
      
      ${b ? 'border-b-2' : null}

      ${e ? 'border-e-2' : null}
    `}
    value={content}
    disabled
    />
  )
}

export default Box;
