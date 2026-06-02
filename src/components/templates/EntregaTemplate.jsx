import FormularioHeader from '../organisms/FormularioHeader'
import InfoEntregaSection from '../organisms/InfoEntregaSection'
import EntregablesFisicosSection from '../organisms/EntregablesFisicosSection'
import VerificacionHardwareSection from '../organisms/VerificacionHardwareSection'
import VerificacionSoftwareSection from '../organisms/VerificacionSoftwareSection'
import ObservacionesSection from '../organisms/ObservacionesSection'
import FirmasSection from '../organisms/FirmasSection'
import FormularioFooter from '../organisms/FormularioFooter'

export default function EntregaTemplate({ form, set, setEntregable, onFirmar, onLimpiarFirma, onSubmit }) {
  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={onSubmit}>
        <FormularioHeader />
        <InfoEntregaSection form={form} set={set} />
        <EntregablesFisicosSection entregables={form.entregables} setEntregable={setEntregable} />
        <VerificacionHardwareSection form={form} set={set} />
        <VerificacionSoftwareSection form={form} set={set} />
        <ObservacionesSection form={form} set={set} />
        <FirmasSection form={form} set={set} onFirmar={onFirmar} onLimpiarFirma={onLimpiarFirma} />
        <FormularioFooter />
      </form>
    </div>
  )
}
