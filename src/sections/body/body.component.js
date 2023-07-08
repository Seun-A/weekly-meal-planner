import { useState } from "react"
import Sidebar from "../../components/sidebar/sidebar.component"
import Table from "../../components/table/table.component"

const Body = () => {
  const [tableContent, setTableContent] = useState({
    Mon: {
      Breakfast: {content:'', rounded:"tl", extended:true, b:true, e:true},
      Lunch: {content:'', extended:true, b:true, e:true},
      Dinner: {content:'', rounded:"tr", extended:true, b:true, e:false},
    },
    Tue: {
      Breakfast: {content:'', b:true, e:true},
      Lunch: {content:'', b:true, e:true},
      Dinner: {content:'', b:true, e:false},
    },
    Wed: {
      Breakfast: {content:'', b:true, e:true},
      Lunch: {content:'', b:true, e:true},
      Dinner: {content:'', b:true, e:false},
    },
    Thur: {
      Breakfast: {content:'', b:true, e:true},
      Lunch: {content:'', b:true, e:true},
      Dinner: {content:'', b:true, e:false},
    },
    Fri: {
      Breakfast: {content:'', b:true, e:true},
      Lunch: {content:'', b:true, e:true},
      Dinner: {content:'', b:true, e:false},
    },
    Sat: {
      Breakfast: {content:'', b:true, e:true},
      Lunch: {content:'', b:true, e:true},
      Dinner: {content:'', b:true, e:false},
    },
    Sun: {
      Breakfast: {content:'', rounded:"bl", extended:true, b:false, e:true},
      Lunch: {content:'', extended:true, b:false, e:true},
      Dinner: {content:'', rounded:"br", extended:true, b:false, e:false},
    }
  })
  
  return (
    <div className="flex justify-center mt-10">
      <Table tableContent={tableContent}  />
      <Sidebar tableContent={tableContent} setTableContent={setTableContent} />
    </div>
  )
}

export default Body
