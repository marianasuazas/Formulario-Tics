export default function Select({ value, onChange, options }) {
  return (
    <select value={value} onChange={onChange}>
      {options.map(({ value: v, label }) => (
        <option key={v} value={v}>{label}</option>
      ))}
    </select>
  )
}
