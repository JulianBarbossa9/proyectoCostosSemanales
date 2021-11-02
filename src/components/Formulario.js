import React, {useState} from 'react';
import Error from './Error';




const Formulario = () => {

    const [nombre, guardarNombre] = useState('');// Podria ser un objeto
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false)

    // Cuando el usuario agrega el gasto
    const agregarGasto = e => {
        e.preventDefault();

        //validar infor
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return 
        }


        // construir gasto (objeto)


        //Pasar el gasto al coponente principal
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agregar Gastos</h2>
            {error ? <Error mensaje="Ambos Campos son obligatorios o El presupuesto incorrecto"/> : null}
            <div className="campo">
                <label>Nombre gasto :</label>
                <input
                    type="text"
                    className="inputIni"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto :</label>
                <input
                    type="number"
                    className="inputIni"
                    placeholder="Ej. $2.000"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value),10)}
                />
            </div>

            <input
                type="submit"
                className="btn-prin"
                value="Agregar Gasto"
            />
        </form>
     );
}
 
export default Formulario;