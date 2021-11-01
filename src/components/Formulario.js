import React, {useState} from 'react';


const Formulario = () => {
    return ( 
        <form>
            <h2>Agregar Gastos</h2>

            <div className="campo">
                <label>Nombre gasto :</label>
                <input
                    type="text"
                    className="inputIni"
                    placeholder="Ej. Transporte"
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto :</label>
                <input
                    type="number"
                    className="inputIni"
                    placeholder="Ej. $2.000"
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