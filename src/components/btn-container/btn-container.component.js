import Btn from "../btn/btn.component"

const BtnContainer = ({ cancel }) => (
  <div className={`btn-container absolute block w-48 top-60 flex justify-between`}>
    <Btn btnStyle='submit' color='bg-red-50' label='Submit' />
    <Btn btnStyle='cancel' color='bg-red-300' label='Cancel' onClick={cancel} />
  </div>     
) 

export default BtnContainer;
