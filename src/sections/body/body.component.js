import GroceryList from "../../components/grocery-list/grocery-list.component"
import Table from "../../components/table/table.component"

const Body = () => (
  <div className="flex justify-center mt-10">
    <Table />
    <GroceryList />
  </div>
)

export default Body
