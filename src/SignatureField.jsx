import { useEffect, useRef, useState } from 'react'

export default function SignatureField({ value, onChange, height = 180, lineWidth = 2 }) {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)
  const ctxRef = useRef(null)

  const [drawing, setDrawing] = useState(false)
  const [hasDrawn, setHasDrawn] = useState(!!value)
  const empty = !hasDrawn

  const resize = (preserve = true) => {
    const c = canvasRef.current
    const wrap = wrapRef.current
    if (!c || !wrap) return
    const dpr = Math.max(1, window.devicePixelRatio || 1)
    const cssW = Math.max(280, wrap.clientWidth || 0)
    const cssH = height

    let prev = null
    if (preserve && c.width && c.height) {
      prev = new Image()
      prev.src = c.toDataURL('image/png')
    }

    c.width = Math.floor(cssW * dpr)
    c.height = Math.floor(cssH * dpr)
    c.style.width = `${cssW}px`
    c.style.height = `${cssH}px`

    const ctx = c.getContext('2d')
    if (!ctx) return
    ctxRef.current = ctx
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.scale(dpr, dpr)

    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, cssW, cssH)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = '#111827'

    if (prev) {
      prev.onload = () => ctx.drawImage(prev, 0, 0, cssW, cssH)
    } else if (value) {
      const img = new Image()
      img.onload = () => ctx.drawImage(img, 0, 0, cssW, cssH)
      img.src = value
    }
  }

  const exportPNG = () => {
    const c = canvasRef.current
    const wrap = wrapRef.current
    if (!c || !wrap) return
    const cssW = wrap.clientWidth || 0
    const cssH = height
    const out = document.createElement('canvas')
    out.width = cssW
    out.height = cssH
    const octx = out.getContext('2d')
    if (!octx) return
    octx.drawImage(c, 0, 0, cssW, cssH)
    onChange(out.toDataURL('image/png'))
  }

  const getPos = (clientX, clientY) => {
    const rect = canvasRef.current.getBoundingClientRect()
    return { x: clientX - rect.left, y: clientY - rect.top }
  }

  const onPtrDown = (e) => {
    const ctx = ctxRef.current
    const c = canvasRef.current
    if (!ctx || !c) return
    c.setPointerCapture?.(e.pointerId)
    const { x, y } = getPos(e.clientX, e.clientY)
    ctx.beginPath()
    ctx.moveTo(x, y)
    setDrawing(true)
    setHasDrawn(true)
  }

  const onPtrMove = (e) => {
    if (!drawing) return
    const ctx = ctxRef.current
    if (!ctx) return
    const { x, y } = getPos(e.clientX, e.clientY)
    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const onPtrUp = (e) => {
    if (!drawing) return
    setDrawing(false)
    try {
      canvasRef.current?.releasePointerCapture(e.pointerId)
    } catch {
      // releasePointerCapture puede fallar si el puntero ya fue liberado
    }
    exportPNG()
  }

  const onMouseDown = (e) => {
    if ('PointerEvent' in window) return
    const ctx = ctxRef.current
    if (!ctx) return
    const { x, y } = getPos(e.clientX, e.clientY)
    ctx.beginPath()
    ctx.moveTo(x, y)
    setDrawing(true)
    setHasDrawn(true)
  }

  const onMouseMove = (e) => {
    if ('PointerEvent' in window) return
    if (!drawing) return
    const ctx = ctxRef.current
    if (!ctx) return
    const { x, y } = getPos(e.clientX, e.clientY)
    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const onMouseUp = () => {
    if ('PointerEvent' in window) return
    if (!drawing) return
    setDrawing(false)
    exportPNG()
  }

  const onTouchStart = (e) => {
    if ('PointerEvent' in window) return
    const ctx = ctxRef.current
    if (!ctx) return
    const t = e.touches[0]
    if (!t) return
    const { x, y } = getPos(t.clientX, t.clientY)
    ctx.beginPath()
    ctx.moveTo(x, y)
    setDrawing(true)
    setHasDrawn(true)
  }

  const onTouchMove = (e) => {
    if ('PointerEvent' in window) return
    if (!drawing) return
    const ctx = ctxRef.current
    if (!ctx) return
    const t = e.touches[0]
    if (!t) return
    const { x, y } = getPos(t.clientX, t.clientY)
    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const onTouchEnd = () => {
    if ('PointerEvent' in window) return
    if (!drawing) return
    setDrawing(false)
    exportPNG()
  }

  const clear = () => {
    const c = canvasRef.current
    const ctx = ctxRef.current
    if (!c || !ctx) return
    ctx.clearRect(0, 0, c.width, c.height)
    setHasDrawn(false)
    resize(false)
    onChange('')
  }

  useEffect(() => {
    resize(false)
    const onR = () => resize(true)
    window.addEventListener('resize', onR)
    return () => window.removeEventListener('resize', onR)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    resize(true)
  }, [value, height, lineWidth]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ display: 'grid', gap: 8 }}>
      <div
        ref={wrapRef}
        style={{
          width: '100%',
          height,
          borderRadius: 8,
          overflow: 'hidden',
          border: '1.5px dashed #9ca3af',
          background: '#fff',
          position: 'relative',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{ width: '100%', height: '100%', display: 'block', touchAction: 'none', cursor: 'crosshair' }}
          onPointerDown={onPtrDown}
          onPointerMove={onPtrMove}
          onPointerUp={onPtrUp}
          onPointerLeave={onPtrUp}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        />
        {empty && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
              color: '#9ca3af',
              fontSize: 13,
              gap: 6,
            }}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.536-6.536a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-1.414.586H8v-2.414A2 2 0 019 13z" />
            </svg>
            Firma aqui con el mouse o el dedo
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={clear}
        style={{
          alignSelf: 'flex-start',
          background: 'none',
          border: '1px solid #d1d5db',
          color: '#6b7280',
          padding: '4px 12px',
          borderRadius: 6,
          fontSize: 12,
          cursor: 'pointer',
          fontFamily: 'inherit',
        }}
      >
        Limpiar
      </button>
    </div>
  )
}
