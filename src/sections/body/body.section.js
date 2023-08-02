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
  <div className={`body-section mt-10
    flex justify-center
    flex-col md:flex-row
    items-center md:items-stretch
  `}>
    <Table />
    <Sidebar />
  </div>
)}

export default Body
