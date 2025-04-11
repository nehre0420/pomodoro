import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Task from './component/task.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Task/>
  </StrictMode>,
)
