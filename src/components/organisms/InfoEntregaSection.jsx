import FormField from '../molecules/FormField'
import RadioGroup from '../molecules/RadioGroup'
import CheckboxPair from '../molecules/CheckboxPair'
import Input from '../atoms/Input'

const TIPOS_EQUIPO = ['Portátil', 'CPU/Monitor', 'AIO', 'Otros']
const ACTIVIDADES = ['Mant. Preventivo', 'Mant. Correctivo', 'Migración PC anterior', 'Config. Inicial']

export default function InfoEntregaSection({ form, set }) {
  return (
    <section className="form-section">
      <div className="grid-2">
        <FormField id="fechaEntrega" label="Fecha Entrega">
          <Input id="fechaEntrega" type="date" value={form.fechaEntrega} onChange={set('fechaEntrega')} />
        </FormField>
        <FormField id="codigoEquipo" label="Código Equipo">
          <Input id="codigoEquipo" value={form.codigoEquipo} onChange={set('codigoEquipo')} placeholder="Ej: EQ-001" />
        </FormField>
      </div>

      <div className="grid-2">
        <CheckboxPair
          label="Estado del equipo"
          options={[
            { label: 'Equipo Nuevo', checked: form.equipoNuevo, onChange: set('equipoNuevo') },
            { label: 'Equipo Usado', checked: form.equipoUsado, onChange: set('equipoUsado') },
          ]}
        />
        <FormField id="ticketAsociado" label="Ticket asociado No.">
          <Input id="ticketAsociado" value={form.ticketAsociado} onChange={set('ticketAsociado')} placeholder="Ej: TK-0001" />
        </FormField>
      </div>

      <RadioGroup
        label="Tipo de Equipo"
        name="tipoEquipo"
        options={TIPOS_EQUIPO}
        value={form.tipoEquipo}
        onChange={set('tipoEquipo')}
      />

      <RadioGroup
        label="Actividad Realizada"
        name="actividadRealizada"
        options={ACTIVIDADES}
        value={form.actividadRealizada}
        onChange={set('actividadRealizada')}
      />
    </section>
  )
}
