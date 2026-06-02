export default function RadioGroup({ label, name, options, value, onChange }) {
  return (
    <div className="field">
      <label>{label}</label>
      <div className="radio-group">
        {options.map((opt) => (
          <label key={opt} className="radio-label">
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={onChange}
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  )
}
