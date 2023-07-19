import DateSection from "../date/date.section";

const Header = () => (
  <header className="header-section flex flex-col justify-center items-center">
    <div className={`
      heading
      font-['Cookie'] text-5xl text-gray-900 py-2
      sm:truncate sm:text-6xl sm:tracking-tight
    `}>
      Weekly Meal Plan
    </div>
    <DateSection />
  </header>
)

export default Header;
