import { useEffect } from "react"
import { useSelector } from 'react-redux'

import Sidebar from "../../components/sidebar/sidebar.component"
import Table from "../../components/table/table.component"

const Body = () => {
  const table = useSelector(state => state.table)
  const checklist = useSelector(state => state.checklist).arr

  useEffect(() => {
    localStorage.setItem('table', JSON.stringify(table));
    localStorage.setItem('checklist', JSON.stringify(checklist));
  }, [table, checklist]);
  
  return (
  <div className="body-section flex justify-center mt-10">
    <Table />
    <Sidebar />
  </div>
)}

export default Body
