import "../Estilos/BotonClear.css"

const BotonClear = ({children, handleClear}) =>{
    return(
        <div className="boton-clear" onClick={handleClear}>
            {children}
        </div>
    )
}
export default BotonClear