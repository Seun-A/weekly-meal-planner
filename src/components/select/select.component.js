const Select = ({ name, value, label, onChange, optArr }) => {
  const placeholder =  `${name.charAt(0).toUpperCase()}${name.slice(1)}`

  return (
    <section className={label ? "picker me-3 text-sm" : null}>
      {label ? label : null}
      <select
        value={value}
        name={name}
        className={`
        ${ label ? 'ms-2 text-sm' : 'text-xs w-16 min-w-min' }
         cursor-pointer focus:outline-none transition duration-300 hover:border-b-red-400 bg-transparent border-b border-black py-1 -translate-y-1
        `}
        onChange={onChange}
        placeholder={placeholder}
      >
        { /* Have a placeholder for food selections only */
          !label?
            <option
              defaultValue
              value=""
              key={0}
              disabled
            >{placeholder}</option>
          : null
        }
        {optArr.map((opt, i) => <option value={opt} key={i+1}>{opt}</option>)}
      </select>
    </section>
  )
}

export default Select
