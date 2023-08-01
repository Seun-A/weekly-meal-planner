import { useEffect } from "react"
import { useSelector } from 'react-redux'

import Sidebar from "../../components/sidebar/sidebar.component"
import Table from "../../components/table/table.component"

const Body = () => {
  const table = useSelector(state => state.table)

  useEffect(() => {
    localStorage.setItem('table', JSON.stringify(table));
  }, [table]);
  
  return (
  <div className="body-section flex justify-center mt-10">
    <Table />
    <Sidebar />
  </div>
)}

export default Body
