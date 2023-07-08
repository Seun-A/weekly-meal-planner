import Heading from "../../components/heading/heading.component";
import DateSection from "../date/date.section";

const Header = () => (
  <header className="header-section flex flex-col justify-center items-center">
    <Heading />
    <DateSection />
  </header>
)

export default Header;
