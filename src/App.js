import React,{useState} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';



function App() {
  /**
   * Definir el state
   */
  const [ presupuesto, guardarPresupuesto] = useState(0);
  const [ restante , guardarRestante ] = useState(0); 
  const [ mostrarpregunta, actualizarPregunta] = useState(true);


  
  return (
      <div className="container">
          <header>
            <h1>Gastos Semanales</h1>

            {/* Carga condicional de componentes */}
            { mostrarpregunta ? 
            (   
                <Pregunta
                  guardarPresupuesto={guardarPresupuesto}
                  guardarRestante={guardarRestante}
                  actualizarPregunta={actualizarPregunta}
                /> ): (
                  //
                <div className="containerPresupuesto">
                  <div className="column-1">
                    <div>
                        <Formulario/>
                    </div>
                  </div>

                  <div className="column-2">
                    <div>
                      2
                    </div>
                  </div>

                </div>
                )
                }
          </header>
      </div>
    )
};

export default App;
