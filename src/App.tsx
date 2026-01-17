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

 const getMilestoneMessage = () => {
    const milestone = Math.floor(contador / 10);
    
    const messages = [
      "", // 0-9 cliques - sem mensagem
     "First milestone: 10 clicks!",
      "20 clicks registered!",
      "You've clicked 30 times!",
      "40 clicks! Keep going",
      "You're at the halfway point now!",
      "60 clicks recorded!",
      "70 clicks and still going!",
      "80 clicks logged!",
      "Almost at 100 clicks.",
      "Century complete: 100 clicks!"
    ];

    return messages[milestone] || "Over 100 clicks! WOW!";
  };

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
           <br />
           Feel free to check out my GitHub and see my other projects!
        </div>

        <fieldset>
        
          {/* Botão q aciona a função 'Click' */}
          <button onClick={Click}>Click here!</button>
        
          {/* Parágrafo dos cliques */}
          <p>Click count: {contador}</p>
          {mensagem && <p>{mensagem}</p>}

          {/* Mensagem a cada 10 cliques */}
          {contador >= 10 && <p className="milestone-message">{getMilestoneMessage()}</p>}

          {/* Botão q aciona a função 'Reset' */}
          <button onClick={Reset}>Reset</button>

        </fieldset>

      </main>

      {/* Marca d'água divônica*/}
      <Footer title='&copy; Vitória Berdtt | 2026 '/>

    </>
  )
}
export default App
