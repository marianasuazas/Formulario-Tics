import FormField from '../molecules/FormField'
import SoftwareCheckRow from '../molecules/SoftwareCheckRow'
import Input from '../atoms/Input'
import Textarea from '../atoms/Textarea'

const SOFTWARE_CHECKS = [
  ['unidadesRed', 'Unidades de red en explorador / Acceso carpetas compartidas'],
  ['correoElectronico', 'Correo electrónico'],
  ['navegadorWeb', 'Navegador Web'],
  ['usuarioAdmin', 'Usuario Admin'],
  ['accesoDirIntranet', 'Acceso directo Intranet'],
  ['siomWeb', 'Siom Web'],
  ['bloqueoUSB', 'Bloqueo USB'],
  ['acrobatReader', 'Acrobat Reader / Lector PDF'],
  ['accesoDirTK', 'Acceso directo TK de Soporte'],
  ['horaFecha', 'Hora / Fecha'],
  ['idiomaTeclado', 'Idioma Teclado correcto'],
  ['politicaDesatendido', 'Política equipo desatendido'],
  ['politicaContrasenas', 'Política de contraseñas / Contraseña de inicio de sesión'],
]

export default function VerificacionSoftwareSection({ form, set }) {
  return (
    <section className="form-section">
      <h2 className="section-title">Verificación Software</h2>

      <div className="grid-2">
        <FormField id="antivirus" label="Estado de Antivirus / Marca">
          <Input id="antivirus" value={form.antivirus} onChange={set('antivirus')} placeholder="Ej: Activo - Kaspersky" />
        </FormField>
        <FormField id="licenciaOffice" label="Licencia Office 365 / Cuenta">
          <Input id="licenciaOffice" value={form.licenciaOffice} onChange={set('licenciaOffice')} placeholder="Ej: usuario@ingeomega.com" />
        </FormField>
      </div>

      <div className="software-checks-grid">
        {SOFTWARE_CHECKS.map(([field, label]) => (
          <SoftwareCheckRow
            key={field}
            label={label}
            checked={form[field]}
            onChange={set(field)}
          />
        ))}
      </div>

      <div className="field" style={{ marginTop: '12px' }}>
        <label htmlFor="otrosProgramas">Otros programas exigidos (detalle)</label>
        <Textarea
          id="otrosProgramas"
          rows={3}
          value={form.otrosProgramas}
          onChange={set('otrosProgramas')}
          placeholder="Listar programas adicionales requeridos..."
        />
      </div>
    </section>
  )
}
