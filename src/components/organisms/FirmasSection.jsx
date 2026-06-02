import FirmaBlock from '../molecules/FirmaBlock'

const FIRMAS = [
  { rol: 'recibe', firmaKey: 'firmaRecibe', nombreKey: 'nombreRecibe', label: 'Quien recibe el equipo' },
  { rol: 'entrega', firmaKey: 'firmaEntrega', nombreKey: 'nombreEntrega', label: 'Quien entrega el equipo' },
]

export default function FirmasSection({ form, set, onFirmar, onLimpiarFirma }) {
  return (
    <section className="form-section firmas-section">
      {FIRMAS.map(({ rol, firmaKey, nombreKey, label }) => (
        <FirmaBlock
          key={rol}
          label={label}
          firmaData={form[firmaKey]}
          nombreData={form[nombreKey]}
          onNombreChange={set(nombreKey)}
          onFirmar={() => onFirmar(rol)}
          onLimpiar={() => onLimpiarFirma(firmaKey)}
        />
      ))}
    </section>
  )
}
