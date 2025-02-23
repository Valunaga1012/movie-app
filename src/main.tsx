import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppRouter } from './AppRouter.tsx'
import { SearchProvider } from './components/context/search.provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SearchProvider>
       <App>
      <AppRouter /> 
     </App>
    </SearchProvider>
  </StrictMode>,
)
