import EntregableRow from '../molecules/EntregableRow'

export default function EntregablesFisicosSection({ entregables, setEntregable }) {
  return (
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
          {entregables.map((item, i) => (
            <EntregableRow
              key={i}
              item={item}
              onEstadoChange={setEntregable(i, 'estado')}
              onObservacionChange={setEntregable(i, 'observaciones')}
            />
          ))}
        </tbody>
      </table>
    </section>
  )
}
