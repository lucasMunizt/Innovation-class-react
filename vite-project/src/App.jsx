import { useState } from 'react'
import './App.css'
import RetanguloPrincipal from './compotentes/retanguloPrincipal/retanguloPrincipal'
import camadas from './assets/Camada_1.png'
function App() {

  return (
    <>
   <div className="imagem-container">
      <img src={camadas} alt="camadas" id="camadas" />
   </div>
    <RetanguloPrincipal/>
    </>
  )
}

export default App
