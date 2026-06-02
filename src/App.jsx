import { useState } from 'react'
import EntregaPage from './pages/EntregaPage'
import HistorialPage from './pages/HistorialPage'
import ConfiguracionesPage from './pages/ConfiguracionesPage'
import BottomTabBar from './components/organisms/BottomTabBar'

export default function App() {
  const [activeTab, setActiveTab] = useState('equipos')

  return (
    <>
      <div style={{ paddingBottom: '80px' }}>
        {activeTab === 'equipos' && <EntregaPage />}
        {activeTab === 'historial' && <HistorialPage />}
        {activeTab === 'configuraciones' && <ConfiguracionesPage />}
      </div>
      <BottomTabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </>
  )
}
