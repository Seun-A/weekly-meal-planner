import './table.style.css';

const Table = () => (
  <div className="meal-table grid grid-cols-[1.5rem,7rem,7rem,7rem]">
    <div className="h-6 w-6"></div>
    <div className="text-sm text-center">Breakfast</div>
    <div className="text-sm text-center">Lunch</div>
    <div className="text-sm text-center">Dinner</div>

    <div className="-rotate-90 translate-y-9 -translate-x-9 text-center h-6 w-24 text-sm">Mon</div>
    <textarea className="p-2 text-xs bg-white h-24 border-dotted border-e-2 border-b-2 border-gray-400 rounded-tl-3xl" />
    <textarea className="p-2 text-xs bg-white border-dotted border-e-2 border-b-2 border-gray-400" />
    <textarea className="text-xs p-2 bg-white h-24 border-dotted border-b-2 border-gray-400 rounded-tr-3xl" />

    <div className="-rotate-90 translate-y-7 -translate-x-7 text-center h-6 w-20 text-sm">Tue</div>
    <textarea className="text-xs p-2 bg-white h-20 border-dotted border-e-2 border-b-2 border-gray-400" />
    <textarea className="text-xs p-2 bg-white h-20 border-dotted border-e-2 border-b-2 border-gray-400" />
    <textarea className="text-xs p-2 bg-white h-20 border-dotted border-b-2 border-gray-400" />

    <div className="-rotate-90 translate-y-7 -translate-x-7 text-center h-6 w-20 text-sm">Wed</div>
    <textarea className="text-xs p-2 bg-white h-20 border-dotted border-e-2 border-b-2 border-gray-400" />
    <textarea className="text-xs p-2 bg-white h-20 border-dotted border-e-2 border-b-2 border-gray-400" />
    <textarea className="text-xs p-2 bg-white h-20 border-dotted border-b-2 border-gray-400" />

    <div className="-rotate-90 translate-y-7 -translate-x-7 text-center h-6 w-20 text-sm">Thur</div>
    <textarea className="text-xs p-2 bg-white h-20 border-dotted border-e-2 border-b-2 border-gray-400" />
    <textarea className="text-xs p-2 bg-white h-20 border-dotted border-e-2 border-b-2 border-gray-400" />
    <textarea className="text-xs p-2 bg-white h-20 border-dotted border-b-2 border-gray-400" />

    <div className="-rotate-90 translate-y-7 -translate-x-7 text-center h-6 w-20 text-sm">Fri</div>
    <textarea className="text-xs p-2 bg-white h-20 border-dotted border-e-2 border-b-2 border-gray-400" />
    <textarea className="text-xs p-2 bg-white h-20 border-dotted border-e-2 border-b-2 border-gray-400" />
    <textarea className="text-xs p-2 bg-white h-20 border-dotted border-b-2 border-gray-400" />

    <div className="-rotate-90 translate-y-7 -translate-x-7 text-center h-6 w-20 text-sm">Sat</div>
    <textarea className="text-xs p-2 bg-white h-20 border-dotted border-e-2 border-b-2 border-gray-400" />
    <textarea className="text-xs p-2 bg-white h-20 border-dotted border-e-2 border-b-2 border-gray-400" />
    <textarea className="text-xs p-2 bg-white h-20 border-dotted border-b-2 border-gray-400" />

    <div className="-rotate-90 translate-y-9 -translate-x-9 text-center h-6 w-24 text-sm">Sun</div>
    <textarea className="text-xs p-2 bg-white h-24 border-dotted rounded-bl-3xl border-e-2 border-gray-400" />
    <textarea className="text-xs p-2 bg-white h-24 border-dotted border-e-2 border-gray-400" />
    <textarea className="text-xs p-2 bg-white h-24 border-dotted rounded-br-3xl border-gray-400" />

  </div>
)

export default Table;
