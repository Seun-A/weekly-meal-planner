import Btn from "../btn/btn.component"

const BtnContainer = ({ form, setState, btnStyle, altState, showAltForm, toggleShowAltForm }) => {
  const cancel = event => {
    event.preventDefault()
  
    if (form === "default") {
      setState({ day:'', meal:'', boxContent:'', alert:false })
    } else {
      let { meal, day } = showAltForm 
      toggleShowAltForm(meal, day, altState.init, false)
    }
  }


  return (
    <div className={`btn-container absolute block w-48 top-60 flex justify-between`}>
      <Btn btnStyle='submit' color='bg-red-50' label='Submit' onClick={null} />
      <Btn btnStyle='cancel' color='bg-red-300' label='Cancel' onClick={cancel} />
    </div>    
  )
}  

export default BtnContainer;
