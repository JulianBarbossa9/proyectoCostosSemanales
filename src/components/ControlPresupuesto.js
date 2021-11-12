import React, { Fragment} from 'react';
import PropTypes from 'prop-types';
import { revisarPresupuesto} from '../Helper';

const ControlPresupuesto = ({presupuesto, restante}) => (  
    <Fragment>
        <div className="alert-principla">
            Presupuesto: ${presupuesto}
        </div>
        <div className={revisarPresupuesto(presupuesto,restante)}>
            Restante: ${restante}
        </div>
    </Fragment>
);

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default ControlPresupuesto;