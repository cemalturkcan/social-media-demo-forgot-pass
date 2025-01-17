import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import './index.css'
import 'primereact/resources/themes/lara-dark-amber/theme.css'
import 'primeflex/primeflex.css'

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/:token" element={<App />} />
    </Routes>
  </BrowserRouter>,
)
