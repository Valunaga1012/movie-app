import { ReactNode } from 'react'
import './App.css'
import { Header } from './components/header/header.component'

interface Props {
  children: ReactNode
}

function App({ children }: Props) {
  return (
    <>
    <Header/>
    {children}
   
    </>
  )
}

export default App
