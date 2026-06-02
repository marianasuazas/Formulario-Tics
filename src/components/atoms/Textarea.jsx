export default function Textarea({ id, rows = 4, value, onChange, placeholder }) {
  return (
    <textarea
      id={id}
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}
