import FormField from '../molecules/FormField'
import Textarea from '../atoms/Textarea'

export default function ObservacionesSection({ form, set }) {
  return (
    <section className="form-section">
      <FormField id="notas" label="Usuario / Contrato / Área / Pendientes">
        <Textarea
          id="notas"
          rows={4}
          value={form.notas}
          onChange={set('notas')}
          placeholder="Notas adicionales..."
        />
      </FormField>
    </section>
  )
}
