export const revisarPresupuesto = (presupuesto, restante) =>{
    let clase;
    if((presupuesto / 4) > restante){
        clase="alert-danger";
    } else if ((presupuesto / 2) > restante){
        clase="alert-warning";
    } else {
        clase = "alert-succes";
    }

    return clase

}