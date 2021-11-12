import React from 'react';

const Gasto = ({gasto}) => (
    <div className="container-listaGastos">
        <ul className="gastos">
            <li>
                {gasto.nombre}
                <span className="gasto-saldo">${gasto.cantidad}</span>
            </li>
        </ul>
    </div>
);
 
export default Gasto;