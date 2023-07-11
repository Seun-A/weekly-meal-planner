import { useState } from "react";

const Select = ({ addedClasses, placeholder, optArr, label }) => {
  const [selectedOpt, setSelectedOpt] = useState('');
  const handleChange = event => {
    setSelectedOpt(event.target.value);
  };

  return (
    <section className="picker me-3 text-sm">
      {label ? label : ""}
      <select
        className={`
          ${addedClasses}
          cursor-pointer focus:outline-none
          transition duration-300 hover:border-b-red-400


          bg-transparent border-b border-black text-sm py-1 -translate-y-1
        `}
        value={selectedOpt}
        onChange={handleChange}
      >
        <option
          defaultValue
          value=""
          key={0}
          disabled
        >{placeholder}</option>
        {optArr.map((opt, i) => <option key={i+1} value={i}>{opt}</option>)}
      </select>
    </section>
  )
}

export default Select;
