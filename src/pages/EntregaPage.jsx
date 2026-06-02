import { useFormulario } from '../hooks/useFormulario'
import { useFirma } from '../hooks/useFirma'
import EntregaTemplate from '../components/templates/EntregaTemplate'
import SignatureModal from '../components/organisms/SignatureModal'

export default function EntregaPage() {
  const { form, set, setEntregable, setFirma, limpiarFirma, handleSubmit } = useFormulario()
  const { activeModal, abrirModal, cerrarModal } = useFirma()

  const handleConfirmarFirma = (dataUrl) => {
    const key = activeModal === 'recibe' ? 'firmaRecibe' : 'firmaEntrega'
    setFirma(key, dataUrl)
    cerrarModal()
  }

  return (
    <>
      <EntregaTemplate
        form={form}
        set={set}
        setEntregable={setEntregable}
        onFirmar={abrirModal}
        onLimpiarFirma={limpiarFirma}
        onSubmit={handleSubmit}
      />
      {activeModal && (
        <SignatureModal
          label={activeModal === 'recibe' ? 'Quien recibe el equipo' : 'Quien entrega el equipo'}
          onConfirm={handleConfirmarFirma}
          onClose={cerrarModal}
        />
      )}
    </>
  )
}
