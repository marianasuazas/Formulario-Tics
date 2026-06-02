import FormField from '../molecules/FormField'
import Input from '../atoms/Input'

export default function VerificacionHardwareSection({ form, set }) {
  return (
    <section className="form-section">
      <h2 className="section-title">Verificación Hardware</h2>

      <div className="grid-2">
        <FormField id="marcaEquipo" label="Marca Equipo">
          <Input id="marcaEquipo" value={form.marcaEquipo} onChange={set('marcaEquipo')} placeholder="Ej: Dell, HP, Lenovo..." />
        </FormField>
        <FormField id="referencia" label="Referencia">
          <Input id="referencia" value={form.referencia} onChange={set('referencia')} />
        </FormField>
      </div>

      <FormField id="serialEquipo" label="Serial Equipo">
        <Input id="serialEquipo" value={form.serialEquipo} onChange={set('serialEquipo')} />
      </FormField>

      <FormField id="sistemaOperativo" label="Sistema Operativo">
        <Input id="sistemaOperativo" value={form.sistemaOperativo} onChange={set('sistemaOperativo')} placeholder="Ej: Windows 11 Pro" />
      </FormField>

      <div className="grid-2">
        <FormField id="procesador" label="Procesador">
          <Input id="procesador" value={form.procesador} onChange={set('procesador')} placeholder="Ej: Intel Core i5" />
        </FormField>
        <FormField id="generacion" label="Generación">
          <Input id="generacion" value={form.generacion} onChange={set('generacion')} placeholder="Ej: 12va" />
        </FormField>
      </div>

      <div className="grid-3">
        <FormField id="tamanoHDD" label="Tamaño HDD/SSD">
          <Input id="tamanoHDD" value={form.tamanoHDD} onChange={set('tamanoHDD')} placeholder="Ej: 256 GB SSD" />
        </FormField>
        <FormField id="cantidadRAM" label="Cantidad de RAM">
          <Input id="cantidadRAM" value={form.cantidadRAM} onChange={set('cantidadRAM')} placeholder="Ej: 8 GB" />
        </FormField>
        <FormField id="puertoRJ45" label="Puerto RJ45/Adaptador">
          <Input id="puertoRJ45" value={form.puertoRJ45} onChange={set('puertoRJ45')} placeholder="Ej: RJ45, USB-C..." />
        </FormField>
      </div>
    </section>
  )
}
