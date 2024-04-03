import "../Estilos/Boton.css"

const Boton = ({children, handleClick}) =>{

    const esOperador = (valor) =>{
        return isNaN(valor) && (valor !== ".") && (valor !== "=")
    }//Si todas estas condiciones se cumplen devuelve verdadero (si el valor no es numero, ni es un '.' y ni es un '=')

    return(
        <div className={`boton-contenedor ${esOperador(children) ? "operador" : ""}`.trimEnd()} 
        onClick={()=>handleClick(children)}>
            {children}
        </div>
    )
}
export default Boton