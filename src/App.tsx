import './App.css'
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {

  const [contador, setContador] = useState(0);
  //variável 'contador' recebe valor zero 
  const [mensagem, setMensagem] = useState("");
  //variável 'mensagem' recebe string vazia

  function Click() {
    setContador(contador + 1);
    //contador recebe o valor atual + 1, e o setContador atualiza a tela com esse novo valor

    if ((contador + 1) % 2 === 0) {
      setMensagem("You clicked an even number of times!");
    } else {
      setMensagem("You clicked an odd number of times!");
    }
    //setMensagem atualiza a tela com a nova mensagem 
  }

  function Reset() {
    setContador(0);
    setMensagem("");
    //setContador e setMensagem atualizam a tela com os valores iniciais
  }

  return (
    <>
      <Header title="React with TypeScript"/>

      <main style={{ flex:1 }}>
        <div className="App">
          Hey! 
          <img src={reactLogo} className="logo-react" alt="React logo" />
        </div>
        <div className='App2'>
           This is my first React application built with TypeScript. 
           <br />
           I'm still learning TypeScript and how to build dynamic interfaces with it.
        </div>

        <fieldset>
        
          <button onClick={Click}>Click here!</button>
        
          <p>Click count: {contador}</p>
          {mensagem && <p>{mensagem}</p>}

          <button onClick={Reset}>Reset</button>

        </fieldset>

      </main>

      <Footer title='&copy; Vitória Berdtt 2026 '/>
    </>
  )
}
export default App
