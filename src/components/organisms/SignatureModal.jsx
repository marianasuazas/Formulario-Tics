import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import SignatureCanvas from '../molecules/SignatureCanvas'

export default function SignatureModal({ label, onConfirm, onClose }) {
  const [sigData, setSigData] = useState('')

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  return createPortal(
    <div className="sig-overlay" onClick={onClose}>
      <div className="sig-modal" onClick={(e) => e.stopPropagation()}>
        <div className="sig-modal-header">
          <span className="sig-modal-title">Firma de cierre</span>
          <button type="button" className="sig-close-btn" onClick={onClose} aria-label="Cerrar">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <p className="sig-modal-label">{label}</p>

        <SignatureCanvas onChange={setSigData} height={200} />

        <div className={`sig-status ${sigData ? 'sig-status--ready' : 'sig-status--waiting'}`}>
          {sigData ? (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Firma detectada — lista para guardar
            </>
          ) : (
            <>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              Dibuja la firma y presiona &quot;Guardar&quot;
            </>
          )}
        </div>

        <div className="sig-modal-actions">
          <button type="button" className="sig-btn sig-btn--cancel" onClick={onClose}>
            Cancelar
          </button>
          <button
            type="button"
            className="sig-btn sig-btn--confirm"
            onClick={() => sigData && onConfirm(sigData)}
            disabled={!sigData}
          >
            Guardar firma
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}
