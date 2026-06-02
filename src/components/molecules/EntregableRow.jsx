const ESTADOS = [
  { value: '', label: '-' },
  { value: 'Entregado', label: 'Entregado' },
  { value: 'No entregado', label: 'No entregado' },
  { value: 'No aplica', label: 'No aplica' },
]

export default function EntregableRow({ item, onEstadoChange, onObservacionChange }) {
  return (
    <tr>
      <td>{item.nombre}</td>
      <td>
        <select value={item.estado} onChange={onEstadoChange}>
          {ESTADOS.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </td>
      <td>
        <input
          type="text"
          value={item.observaciones}
          onChange={onObservacionChange}
          placeholder="Observación..."
        />
      </td>
    </tr>
  )
}
