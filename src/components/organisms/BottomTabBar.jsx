const TABS = [
  { id: 'equipos', label: 'Equipos', icon: 'computer' },
  { id: 'historial', label: 'Historial', icon: 'history' },
  { id: 'configuraciones', label: 'Configuraciones', icon: 'settings' },
]

export default function BottomTabBar({ activeTab, onTabChange }) {
  return (
    <nav className="bottom-tab-bar">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          className={`tab-item${activeTab === tab.id ? ' tab-item--active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          <span className="material-symbols-outlined">{tab.icon}</span>
          <span className="tab-label">{tab.label}</span>
        </button>
      ))}
    </nav>
  )
}
