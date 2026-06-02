import { useState } from 'react'

const initialEntregables = [
  { nombre: 'Cables y/o fuente de poder', estado: '', observaciones: '' },
  { nombre: 'Dispositivos externos Teclado/Mouse', estado: '', observaciones: '' },
  { nombre: 'Cable de Red (Patch Cord)', estado: '', observaciones: '' },
  { nombre: 'Otros accesorios', estado: '', observaciones: '' },
]

const initialForm = {
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
}

export function useFormulario() {
  const [form, setForm] = useState(initialForm)

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

  const setFirma = (key, dataUrl) => {
    setForm((prev) => ({ ...prev, [key]: dataUrl }))
  }

  const limpiarFirma = (key) => {
    setForm((prev) => ({ ...prev, [key]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', form)
    alert('Formulario guardado correctamente.')
  }

  return { form, set, setEntregable, setFirma, limpiarFirma, handleSubmit }
}
