const Btn = ({ color, label, onClick = null, btnStyle }) => (
  <button className = {`
    ${color} py-2 shadow-md rounded-md text-sm font-semibold w-16

    text-center cursor-pointer 

    transition duration-200
    hover:bg-red-400/50
    focus:outline-none active:translate-y-1 active:shadow-none
  `}
    onClick={onClick}
    type={btnStyle}
  >
    {label}
  </button>
)

export default Btn;
