export default function SoftwareCheckRow({ label, checked, onChange }) {
  return (
    <label className="check-item">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  )
}
