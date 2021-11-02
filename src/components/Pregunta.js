import React,{Fragment, useState} from 'react';
import Error from './Error';




const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
   
   /**
    * Definir el state
    */
   const [cantidad, guardarCantidad] = useState(0);

   /**
    *  Verificar info dada
    */
   const [error, guardarError] = useState(false);

   /**
    * Función que lee el presupuesto
    */
   const definiPresupuesto = e => {
       //Convierto el string a un valor
       guardarCantidad(parseInt(e.target.value,10));
   }
   
   /**
    * Submit para definir presupuesto
    */
    
   const enviarInfo = e =>{
       // preventDefault --> sirve para que no envie el query ("d/usuario/documentos") y tampoco recargue la pagina
       e.preventDefault();

       // Validar la info
        if(cantidad < 1 || isNaN (cantidad)){
            guardarError(true);
            return;
        }

        guardarError(false);

       // Que se hace si pasa la validación 
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false); 
   }

    return (  
        <Fragment>
            <div className="presupuesto">

                    <div className="containerInput">
                        <h2 className="titlePresupuesto">Digite su Presupuesto</h2>
                            
                            <div className="error-msg">
                                {error ? <Error mensaje="El Presupuesto es Incorrecto"/> : null}
                            </div>

                        <form
                            onSubmit = {enviarInfo}
                        >
                            <input
                                type="number"
                                className="presupuestoIni"
                                placeholder="Digite su presupuesto"
                                onChange = {definiPresupuesto}
                            />

                            <input
                                type="submit"
                                className="btn-primary"
                                value="Definir Presupuesto"
                            />
                        </form>
                    </div>
            </div>

                
            
        </Fragment>
    );
}
 
export default Pregunta;