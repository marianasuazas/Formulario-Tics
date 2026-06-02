import { useState } from 'react'

export function useFirma() {
  const [activeModal, setActiveModal] = useState(null) // 'recibe' | 'entrega'

  const abrirModal = (rol) => setActiveModal(rol)
  const cerrarModal = () => setActiveModal(null)

  return { activeModal, abrirModal, cerrarModal }
}
