import React from 'react';
import PropTypes from 'prop-types';

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
 

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}

export default Gasto;