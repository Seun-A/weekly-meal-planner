import { useDispatch, useSelector } from 'react-redux'
import { setEdit, showEdit } from '../../redux/edit/edit.slice'

const Box = ({ meal, day}) => {
  const Table = useSelector(state => state.table)
  const Edit = useSelector(state => state.edit)
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(showEdit());
    dispatch(setEdit({meal:meal, day:day, content:Table[day][meal]}))

    // Doesn't work
    document.getElementById('text-area').focus()
  }

  const contentToShow = Edit.meal === meal && Edit.day === day ? Edit.content 
        : Table[day][meal];

  const bg = Edit.visible ?
    Edit.meal === meal && Edit.day === day ?
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
