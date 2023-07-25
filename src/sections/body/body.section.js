import { useEffect, useState } from "react"
import Sidebar from "../../components/sidebar/sidebar.component"
import Table from "../../components/table/table.component"

const Body = () => {
  const [table, setTable] = useState(() => {
    const initTable = {
      Mon: { Breakfast: '', Lunch: '', Dinner: '' },
      Tue: { Breakfast: '', Lunch: '', Dinner: '' },
      Wed: { Breakfast: '', Lunch: '', Dinner: '' },
      Thur: { Breakfast: '', Lunch: '', Dinner: '' },
      Fri: { Breakfast: '', Lunch: '', Dinner: '' },
      Sat: { Breakfast: '', Lunch: '', Dinner: '' },
      Sun: { Breakfast: '', Lunch: '', Dinner: '' }
    }
    
    const storage = JSON.parse(localStorage.getItem('table'))

    if (storage)  {
      return storage
    } else {
      return initTable
    }
  })
  
  useEffect(() => {
    localStorage.setItem('table', JSON.stringify(table));
  }, [table]);
  
  
  const submit = (day, meal, value) => {
    setTable((prevMeals) => {
      const newTable = Object.assign({}, prevMeals);
      newTable[day][meal] = value
      return newTable
    })
  }

  const [editForm, setEditForm] = useState({ meal:'', day:'', content:'' })
  const [editFormVisible, setEditFormVisible] = useState(false)

  
  return (
    <div className="body-section flex justify-center mt-10">
      <Table
        table={table}
        editForm={editForm}
        submit={submit}
        setEditForm={setEditForm}
        setEditFormVisible={setEditFormVisible}
      />
      <Sidebar
        submit={submit}
        table={table}
        editForm={editForm}
        setEditForm={setEditForm}
        editFormVisible={editFormVisible}
        setEditFormVisible={setEditFormVisible}
      />
    </div>
  )
}

export default Body
