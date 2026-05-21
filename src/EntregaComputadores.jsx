import { useState } from 'react'
import SignatureModal from './SignatureModal'
import './EntregaComputadores.css'

const initialEntregables = [
  { nombre: 'Cables y/o fuente de poder', estado: '', observaciones: '' },
  { nombre: 'Dispositivos externos Teclado/Mouse', estado: '', observaciones: '' },
  { nombre: 'Cable de Red (Patch Cord)', estado: '', observaciones: '' },
  { nombre: 'Otros accesorios', estado: '', observaciones: '' },
]

export default function EntregaComputadores() {
  const [activeModal, setActiveModal] = useState(null) // 'recibe' | 'entrega'

  const [form, setForm] = useState({
    fechaEntrega: '',
    codigoEquipo: '',
    equipoNuevo: false,
    equipoUsado: false,
    ticketAsociado: '',
    tipoEquipo: '',
    actividadRealizada: '',
    entregables: initialEntregables,
    marcaEquipo: '',
    referencia: '',
    serialEquipo: '',
    sistemaOperativo: '',
    procesador: '',
    generacion: '',
    tamanoHDD: '',
    cantidadRAM: '',
    puertoRJ45: '',
    antivirus: '',
    licenciaOffice: '',
    unidadesRed: false,
    correoElectronico: false,
    navegadorWeb: false,
    usuarioAdmin: false,
    accesoDirIntranet: false,
    siomWeb: false,
    bloqueoUSB: false,
    acrobatReader: false,
    accesoDirTK: false,
    horaFecha: false,
    idiomaTeclado: false,
    politicaDesatendido: false,
    politicaContrasenas: false,
    otrosProgramas: '',
    notas: '',
    firmaRecibe: '',
    nombreRecibe: '',
    firmaEntrega: '',
    nombreEntrega: '',
  })

  const set = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const setEntregable = (index, field) => (e) => {
    setForm((prev) => {
      const entregables = prev.entregables.map((item, i) =>
        i === index ? { ...item, [field]: e.target.value } : item
      )
      return { ...prev, entregables }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', form)
    alert('Formulario guardado correctamente.')
  }

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit}>

        <header className="form-header">
          <div className="header-logo">INGEOMEGA S.A.S</div>
          <div className="header-title">ENTREGA DE COMPUTADORES</div>
          <div className="header-sig">Sistema Integrado de Gestión</div>
        </header>

        <section className="form-section">
          <div className="grid-2">
            <div className="field">
              <label htmlFor="fechaEntrega">Fecha Entrega</label>
              <input
                id="fechaEntrega"
                type="date"
                value={form.fechaEntrega}
                onChange={set('fechaEntrega')}
              />
            </div>
            <div className="field">
              <label htmlFor="codigoEquipo">Código Equipo</label>
              <input
                id="codigoEquipo"
                type="text"
                value={form.codigoEquipo}
                onChange={set('codigoEquipo')}
                placeholder="Ej: EQ-001"
              />
            </div>
          </div>

          <div className="grid-2">
            <div className="field-inline">
              <label>Estado del equipo</label>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={form.equipoNuevo}
                    onChange={set('equipoNuevo')}
                  />
                  Equipo Nuevo
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={form.equipoUsado}
                    onChange={set('equipoUsado')}
                  />
                  Equipo Usado
                </label>
              </div>
            </div>
            <div className="field">
              <label htmlFor="ticketAsociado">Ticket asociado No.</label>
              <input
                id="ticketAsociado"
                type="text"
                value={form.ticketAsociado}
                onChange={set('ticketAsociado')}
                placeholder="Ej: TK-0001"
              />
            </div>
          </div>

          <div className="field">
            <label>Tipo de Equipo</label>
            <div className="radio-group">
              {['Portátil', 'CPU/Monitor', 'AIO', 'Otros'].map((tipo) => (
                <label key={tipo} className="radio-label">
                  <input
                    type="radio"
                    name="tipoEquipo"
                    value={tipo}
                    checked={form.tipoEquipo === tipo}
                    onChange={set('tipoEquipo')}
                  />
                  {tipo}
                </label>
              ))}
            </div>
          </div>

          <div className="field">
            <label>Actividad Realizada</label>
            <div className="radio-group">
              {['Mant. Preventivo', 'Mant. Correctivo', 'Migración PC anterior', 'Config. Inicial'].map((act) => (
                <label key={act} className="radio-label">
                  <input
                    type="radio"
                    name="actividadRealizada"
                    value={act}
                    checked={form.actividadRealizada === act}
                    onChange={set('actividadRealizada')}
                  />
                  {act}
                </label>
              ))}
            </div>
          </div>
        </section>

        <section className="form-section">
          <h2 className="section-title">Entregables Físicos</h2>
          <table className="tabla-entregables">
            <thead>
              <tr>
                <th>Entregable</th>
                <th className="col-estado">Estado</th>
                <th>Observaciones</th>
              </tr>
            </thead>
            <tbody>
              {form.entregables.map((item, i) => (
                <tr key={i}>
                  <td>{item.nombre}</td>
                  <td>
                    <select
                      value={item.estado}
                      onChange={setEntregable(i, 'estado')}
                    >
                      <option value="">-</option>
                      <option value="Entregado">Entregado</option>
                      <option value="No entregado">No entregado</option>
                      <option value="No aplica">No aplica</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.observaciones}
                      onChange={setEntregable(i, 'observaciones')}
                      placeholder="Observación..."
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="form-section">
          <h2 className="section-title">Verificación Hardware</h2>
          <div className="grid-2">
            <div className="field">
              <label htmlFor="marcaEquipo">Marca Equipo</label>
              <input
                id="marcaEquipo"
                type="text"
                value={form.marcaEquipo}
                onChange={set('marcaEquipo')}
                placeholder="Ej: Dell, HP, Lenovo..."
              />
            </div>
            <div className="field">
              <label htmlFor="referencia">Referencia</label>
              <input
                id="referencia"
                type="text"
                value={form.referencia}
                onChange={set('referencia')}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="serialEquipo">Serial Equipo</label>
            <input
              id="serialEquipo"
              type="text"
              value={form.serialEquipo}
              onChange={set('serialEquipo')}
            />
          </div>
          <div className="field">
            <label htmlFor="sistemaOperativo">Sistema Operativo</label>
            <input
              id="sistemaOperativo"
              type="text"
              value={form.sistemaOperativo}
              onChange={set('sistemaOperativo')}
              placeholder="Ej: Windows 11 Pro"
            />
          </div>
          <div className="grid-2">
            <div className="field">
              <label htmlFor="procesador">Procesador</label>
              <input
                id="procesador"
                type="text"
                value={form.procesador}
                onChange={set('procesador')}
                placeholder="Ej: Intel Core i5"
              />
            </div>
            <div className="field">
              <label htmlFor="generacion">Generación</label>
              <input
                id="generacion"
                type="text"
                value={form.generacion}
                onChange={set('generacion')}
                placeholder="Ej: 12va"
              />
            </div>
          </div>
          <div className="grid-3">
            <div className="field">
              <label htmlFor="tamanoHDD">Tamaño HDD/SSD</label>
              <input
                id="tamanoHDD"
                type="text"
                value={form.tamanoHDD}
                onChange={set('tamanoHDD')}
                placeholder="Ej: 256 GB SSD"
              />
            </div>
            <div className="field">
              <label htmlFor="cantidadRAM">Cantidad de RAM</label>
              <input
                id="cantidadRAM"
                type="text"
                value={form.cantidadRAM}
                onChange={set('cantidadRAM')}
                placeholder="Ej: 8 GB"
              />
            </div>
            <div className="field">
              <label htmlFor="puertoRJ45">Puerto RJ45/Adaptador</label>
              <input
                id="puertoRJ45"
                type="text"
                value={form.puertoRJ45}
                onChange={set('puertoRJ45')}
                placeholder="Ej: RJ45, USB-C..."
              />
            </div>
          </div>
        </section>

        <section className="form-section">
          <h2 className="section-title">Verificación Software</h2>

          <div className="grid-2">
            <div className="field">
              <label htmlFor="antivirus">Estado de Antivirus / Marca</label>
              <input
                id="antivirus"
                type="text"
                value={form.antivirus}
                onChange={set('antivirus')}
                placeholder="Ej: Activo - Kaspersky"
              />
            </div>
            <div className="field">
              <label htmlFor="licenciaOffice">Licencia Office 365 / Cuenta</label>
              <input
                id="licenciaOffice"
                type="text"
                value={form.licenciaOffice}
                onChange={set('licenciaOffice')}
                placeholder="Ej: usuario@ingeomega.com"
              />
            </div>
          </div>

          <div className="software-checks-grid">
            {[
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
            ].map(([field, label]) => (
              <label key={field} className="check-item">
                <input
                  type="checkbox"
                  checked={form[field]}
                  onChange={set(field)}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>

          <div className="field" style={{ marginTop: '12px' }}>
            <label htmlFor="otrosProgramas">Otros programas exigidos (detalle)</label>
            <textarea
              id="otrosProgramas"
              rows={3}
              value={form.otrosProgramas}
              onChange={set('otrosProgramas')}
              placeholder="Listar programas adicionales requeridos..."
            />
          </div>
        </section>

        <section className="form-section">
          <div className="field">
            <label htmlFor="notas">Usuario / Contrato / Área / Pendientes</label>
            <textarea
              id="notas"
              rows={4}
              value={form.notas}
              onChange={set('notas')}
              placeholder="Notas adicionales..."
            />
          </div>
        </section>

        <section className="form-section firmas-section">
          {['recibe', 'entrega'].map((rol) => {
            const firmaKey = rol === 'recibe' ? 'firmaRecibe' : 'firmaEntrega'
            const nombreKey = rol === 'recibe' ? 'nombreRecibe' : 'nombreEntrega'
            const labelText = rol === 'recibe'
              ? 'Quien recibe el equipo'
              : 'Quien entrega el equipo'
            return (
              <div key={rol} className="firma-block">
                <p className="firma-block-label">{labelText}</p>
                <input
                  type="text"
                  value={form[nombreKey]}
                  onChange={set(nombreKey)}
                  placeholder="Nombre completo"
                  className="firma-nombre-input"
                />
                <div className="firma-canvas-area">
                  {form[firmaKey] ? (
                    <img
                      src={form[firmaKey]}
                      alt={`Firma de ${labelText}`}
                      className="firma-preview"
                    />
                  ) : (
                    <div className="firma-placeholder">Sin firma</div>
                  )}
                </div>
                <div className="firma-actions">
                  <button
                    type="button"
                    className="btn-firmar"
                    onClick={() => setActiveModal(rol)}
                  >
                    {form[firmaKey] ? 'Volver a firmar' : 'Firmar'}
                  </button>
                  {form[firmaKey] && (
                    <button
                      type="button"
                      className="btn-limpiar-firma"
                      onClick={() => setForm((prev) => ({ ...prev, [firmaKey]: '' }))}
                    >
                      Limpiar firma
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </section>

        {activeModal && (
          <SignatureModal
            label={activeModal === 'recibe' ? 'Quien recibe el equipo' : 'Quien entrega el equipo'}
            onConfirm={(dataUrl) => {
              const key = activeModal === 'recibe' ? 'firmaRecibe' : 'firmaEntrega'
              setForm((prev) => ({ ...prev, [key]: dataUrl }))
              setActiveModal(null)
            }}
            onClose={() => setActiveModal(null)}
          />
        )}

        <div className="form-footer">
          <span className="form-code">SF-S-543-1221</span>
          <button type="submit" className="btn-submit">Guardar formulario</button>
        </div>

      </form>
    </div>
  )
}
