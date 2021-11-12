import React, { Fragment} from 'react';

const ControlPresupuesto = ({presupuesto, restante}) => (  
    <Fragment>
        <div className="alert-principla">
            Presupuesto: ${presupuesto}
        </div>
        <div className="restante">
            Restante: ${restante}
        </div>
    </Fragment>
);

 
export default ControlPresupuesto;