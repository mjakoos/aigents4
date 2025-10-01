import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Agency from './pages/Agency'
import AIChatAgent from './pages/AIChatAgent'
import AIStudio from './pages/AIStudio'
import Talepler from './pages/Talepler'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agency" element={<Agency />} />
      <Route path="/ai-chat-agent" element={<AIChatAgent />} />
      <Route path="/ai-studio" element={<AIStudio />} />
      <Route path="/talepler" element={<Talepler />} />
    </Routes>
  )
}

export default App
