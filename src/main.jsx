import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/snowfall.css'
import './styles/App.css'
import Snowfall from './components/snowfall'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*  COMPONENTE  */}
    <Snowfall>
            <div>
              <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
    </Snowfall>

  </StrictMode>,
)