import { useState } from "react"
import Sidebar from "../../components/sidebar/sidebar.component"
import Table from "../../components/table/table.component"

const Body = () => {
  const [tableContent, setTableContent] = useState({
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
  })

  const [altForm, setAltForm] = useState({ showAlt:false, meal:'', day:'', content:'' })
  const [altShow, setAltShow] = useState(false)
  
  return (
    <div className="body-section flex justify-center mt-10">
      <Table
        tableContent={tableContent}
        altForm={altForm}
        setAltForm={setAltForm}
        altShow={altShow}
        setAltShow={setAltShow}
      />
      <Sidebar
        tableContent={tableContent}
        setTableContent={setTableContent}
        altForm={altForm}
        setAltForm={setAltForm}
        altShow={altShow}
        setAltShow={setAltShow}
      />
    </div>
  )
}

export default Body
