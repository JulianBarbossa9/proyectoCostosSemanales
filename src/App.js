import React,{useState} from 'react';
import Pregunta from './components/Pregunta';



function App() {
  /**
   * Definir el state
   */
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante , guardarRestante ] = useState(0); 


  
  return (
      <div className="container">
          <header>
            <h1>Gastos Semanales</h1>
            
            <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            />
          </header>
      </div>
    )
};

export default App;
