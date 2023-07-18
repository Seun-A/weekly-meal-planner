const BtnContainer = ({ ...props }) => (
  <div className={`btn-container absolute block w-48 top-60 flex justify-between`}>
    <Btn btnStyle='submit' {...props} />
    <Btn btnStyle='cancel' {...props} />
  </div>
)

const Btn = ({ form, setState, btnStyle, altState, showAltForm, toggleShowAltForm }) => {
  const cancel = event => {
    event.preventDefault()

    if (form === "default") {
      setState({ day:'', meal:'', boxContent:'', alert:false })
    } else {
      let { meal, day } = showAltForm 
      toggleShowAltForm(meal, day, altState.init, false)
    }
  }

  const [color, label, action] = btnStyle === "submit" ? 
    [ 'bg-red-50', 'Submit', null ] : btnStyle === "cancel" ?
    [ 'bg-red-300', 'Cancel', cancel ] :
    [ 'bg-red-50', '?', null ]

  return (
    <button className={`
      ${color} py-2 shadow-md rounded-md text-sm font-semibold w-16

      text-center cursor-pointer 

      transition duration-200
      hover:bg-red-400/50
      focus:outline-none active:translate-y-1 active:shadow-none
    `}
      onClick={action}
      type={btnStyle}
    >
      {label}
    </button>
  )
}

export default BtnContainer;
