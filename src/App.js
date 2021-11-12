import React,{useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';



function App() {
  /**
   * Definir el state
   */
  const [ presupuesto, guardarPresupuesto] = useState(0);
  const [ restante , guardarRestante ] = useState(0); 
  const [ mostrarpregunta, actualizarPregunta] = useState(true);
  const [ gastos, guardarGastos] = useState([]);
  const [ gasto , gurdarGasto] = useState({});//
  const [ creargasto, guardarCrearGasto] = useState(false);//

    /**
    * Use effect que actualize el restante 
    */

    useEffect(()=> {
      if(creargasto){

        //Agrega el nuevo presupuesto 
        guardarGastos([
          ...gastos,
          gasto
        ]);

        // Resta del presupuesto actual
        const presupuestoRestante = restante - gasto.cantidad;
        guardarRestante(presupuestoRestante);

        // Resetear a false
        guardarCrearGasto(false);
      }
    },[gasto, creargasto, gastos, restante]);


    //Cuando agreguemos un nuevo costo
    // const agregarCosto = gasto => {
       
        
    // }


  
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
                        <Formulario
                          gurdarGasto={gurdarGasto}
                          guardarCrearGasto={guardarCrearGasto}
                        />
                    </div>
                  </div>

                  <div className="column-2">
                    <div>
                      <Listado 
                        gastos={gastos}
                      />

                      <ControlPresupuesto
                        presupuesto={presupuesto}
                        restante={restante}
                      />
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
