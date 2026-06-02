export default function CheckboxPair({ label, options }) {
  return (
    <div className="field-inline">
      <label>{label}</label>
      <div className="checkbox-group">
        {options.map(({ label: optLabel, checked, onChange }) => (
          <label key={optLabel} className="checkbox-label">
            <input type="checkbox" checked={checked} onChange={onChange} />
            {optLabel}
          </label>
        ))}
      </div>
    </div>
  )
}
