import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import {v4 as uuidv4} from 'uuid';// npm i uuid




const Formulario = ({ gurdarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState('');// Podria ser un objeto
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false); 
    


    // Cuando el usuario agrega el gasto
    const agregarGasto = e => {
        e.preventDefault();

        //validar infor = isNaN(is not a number)
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);

        // construir gasto (objeto)
        const gastos = {
            nombre,
            cantidad,
            id: uuidv4()
        }

        // console.log(gastos);

        //Pasar el gasto al coponente principal
        gurdarGasto(gastos);
        guardarCrearGasto(true);
        // resetear el form
        guardarNombre('');
        guardarCantidad(0);
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
                    placeholder=" Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto :</label>
                <input
                    type="number"
                    className="inputIni"
                    placeholder=" Ej. $2.000"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value),1000)}
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

Formulario.propTypes = {
    gurdarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

 
export default Formulario;