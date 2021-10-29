import React,{Fragment} from 'react';

const Pregunta = () => {
    return (  
        <Fragment>
            <div className="presupuesto">

                    <div className="containerInput">
                    <h2 className="titlePresupuesto">Digite su Presupuesto</h2>
                        <form>
                            <input
                                type="number"
                                className="presupuestoIni"
                                placeholder="Digite su presupuesto"
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