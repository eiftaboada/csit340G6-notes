import Notes from './components/Notes'
import Info from './components/Info'

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-light text-[#111]">
      <Notes />
      <Info name="Eif S. Taboada" />
    </div>
  )
}

export default App