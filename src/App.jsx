import Notes from './components/Notes'
import Info from './components/Info'
import { useState, useEffect } from 'react'
import { SettingsContext } from './SettingsContext.js'

function App() {
  const [largeText, setLargeText] = useState(() => {
  const saved = localStorage.getItem('largeText')
  return saved ? JSON.parse(saved) : false
})

  useEffect(() => {
    localStorage.setItem('largeText', JSON.stringify(largeText))
  }, [largeText])

  return (
    <SettingsContext value={{ largeText, setLargeText }}>
      <div className="bg-[#f5f5f5] font-light text-[#111]">
        <Notes />
        <Info name="Eif Taboada" />
      </div>
    </SettingsContext>
  )
}

export default App
