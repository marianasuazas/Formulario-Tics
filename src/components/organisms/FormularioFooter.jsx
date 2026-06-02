import Button from '../atoms/Button'

export default function FormularioFooter() {
  return (
    <div className="form-footer">
      <span className="form-code">SF-S-543-1221</span>
      <Button variant="primary" type="submit">Guardar formulario</Button>
    </div>
  )
}
