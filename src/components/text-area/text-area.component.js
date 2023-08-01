import { useSelector } from 'react-redux'

const TextArea = ({ ...props }) => {
  const isFocus = useSelector(state => state.edit).visible

  return (
    <textarea
      {...props}
      name="content"
      id={isFocus ? 'edit-text-area' : null}
      type = "text"
      className={`
        h-28 w-full border border-black rounded-lg resize-none text-xs py-2 px-3
        focus:outline-none
        hover:border-red-400/25 focus:border-red-400/25 active:border-red-400/25
        transition-colors duration-300
      `}
      placeholder="e.g. Sunny side up"
    />
  )
}

export default TextArea;
