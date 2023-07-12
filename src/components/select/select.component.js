import { useState } from "react";

const SelectTime = ({ addedClasses, placeholder, optArr, label }) => {
  const [selectedOpt, setSelectedOpt] = useState('');
  const handleChange = event => setSelectedOpt(event.target.value);

  return (
    <section className="picker me-3 text-sm" >
      {label}
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
        {optArr.map((opt, i) => <option value={opt} key={i+1}>{opt}</option>)}
      </select>
    </section>
  )
}



const SelectFood = ({value, name, change, optArr}) => {
  const placeholder = `${name.charAt(0).toUpperCase()}${name.slice(1)}`

  return (
    <select
      value={value}
      name={name}
      className={`
      text-xs cursor-pointer focus:outline-none transition duration-300 hover:border-b-red-400 w-16 min-w-min bg-transparent border-b border-black py-1 -translate-y-1
      `}
      onChange={change}
      placeholder={placeholder}
    >
      <option
        defaultValue
        value=""
        key={0}
        disabled
      >{placeholder}</option>
      {optArr.map((opt, i) => <option value={opt} key={i+1}>{opt}</option>)}
    </select>
  )
}

export { SelectTime, SelectFood }
