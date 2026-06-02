import Label from '../atoms/Label'

export default function FormField({ id, label, children }) {
  return (
    <div className="field">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  )
}
