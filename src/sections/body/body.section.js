import { useEffect, useState } from "react"
import Sidebar from "../../components/sidebar/sidebar.component"
import Table from "../../components/table/table.component"

const Body = () => {
  const [tableContent, setTableContent] = useState(() => {
    const defaultTable = {
      Mon: {
        Breakfast: {content:'', rounded:"tl", b:true, e:true},
        Lunch: {content:'', rounded:null, b:true, e:true},
        Dinner: {content:'', rounded:"tr", b:true, e:false},
      },
      Tue: {
        Breakfast: {content:'', rounded:null, b:true, e:true},
        Lunch: {content:'', rounded:null, b:true, e:true},
        Dinner: {content:'', rounded:null, b:true, e:false},
      },
      Wed: {
        Breakfast: {content:'', rounded:null, b:true, e:true},
        Lunch: {content:'', rounded:null, b:true, e:true},
        Dinner: {content:'', rounded:null, b:true, e:false},
      },
      Thur: {
        Breakfast: {content:'', rounded:null, b:true, e:true},
        Lunch: {content:'', rounded:null, b:true, e:true},
        Dinner: {content:'', rounded:null, b:true, e:false},
      },
      Fri: {
        Breakfast: {content:'', rounded:null, b:true, e:true},
        Lunch: {content:'', rounded:null, b:true, e:true},
        Dinner: {content:'', rounded:null, b:true, e:false},
      },
      Sat: {
        Breakfast: {content:'', rounded:null, b:true, e:true},
        Lunch: {content:'', rounded:null, b:true, e:true},
        Dinner: {content:'', rounded:null, b:true, e:false},
      },
      Sun: {
        Breakfast: {content:'', rounded:"bl", b:false, e:true},
        Lunch: {content:'', rounded:null, b:false, e:true},
        Dinner: {content:'', rounded:"br", b:false, e:false},
      }
    }
    
    const storage = JSON.parse(localStorage.getItem('tableContent'))

    if (storage)  {
      return storage
    } else {
      return defaultTable
    }
  })
  
  useEffect(() => {
    localStorage.clear()
    localStorage.setItem('tableContent', JSON.stringify(tableContent));
  }, [tableContent]);
  
  
  const [editForm, setEditForm] = useState({ meal:'', day:'', content:'' })
  const [editFormVisible, setEditFormVisible] = useState(false)

  
  return (
    <div className="body-section flex justify-center mt-10">
      <Table
        tableContent={tableContent}
        editForm={editForm}
        setEditForm={setEditForm}
        setEditFormVisible={setEditFormVisible}
      />
      <Sidebar
        tableContent={tableContent}
        setTableContent={setTableContent}
        editForm={editForm}
        setEditForm={setEditForm}
        editFormVisible={editFormVisible}
        setEditFormVisible={setEditFormVisible}
      />
    </div>
  )
}

export default Body
