import Button from '../atoms/Button'

export default function FirmaBlock({ label, firmaData, nombreData, onNombreChange, onFirmar, onLimpiar }) {
  return (
    <div className="firma-block">
      <p className="firma-block-label">{label}</p>
      <input
        type="text"
        value={nombreData}
        onChange={onNombreChange}
        placeholder="Nombre completo"
        className="firma-nombre-input"
      />
      <div className="firma-canvas-area">
        {firmaData ? (
          <img src={firmaData} alt={`Firma — ${label}`} className="firma-preview" />
        ) : (
          <div className="firma-placeholder">Sin firma</div>
        )}
      </div>
      <div className="firma-actions">
        <Button variant="firma" onClick={onFirmar}>
          {firmaData ? 'Volver a firmar' : 'Firmar'}
        </Button>
        {firmaData && (
          <Button variant="limpiar" onClick={onLimpiar}>
            Limpiar firma
          </Button>
        )}
      </div>
    </div>
  )
}
