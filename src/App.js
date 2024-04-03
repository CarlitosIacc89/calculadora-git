import { evaluate } from "mathjs";
import { useState } from "react";
import Boton from "./Components/Boton";
import BotonClear from "./Components/BotonClear";
import Display from "./Components/Display";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (val) => {
    setInput(input + val);
    if (input.length === 19) {
      setInput(input);
    }
  };

  const equal = () => {
    let reg = /^[\-]?[0-9]*\.?[0-9]*[\+\-\*\/]?[0-9]*\.?[0-9]*$/;

    let regex = /^[\-]?[0-9]*\.?[0-9]*$/;

    if (regex.test(input)) {
      setInput(input);
    } else if (!reg.test(input)) {
      setInput("");
    } else {
      let regex = /[0-9]+[\+\-\*\/][0-9]+$/;
      if (!regex.test(input)) {
        setInput("");
      } else {
        setInput(evaluate(input));
      }
    }
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="App">
      <h1 className="title">Cacluladora</h1>
      <div className="contenedor-calculadora">
        <Display input={input} />
        <div className="fila">
          <Boton handleClick={handleClick}>1</Boton>
          <Boton handleClick={handleClick}>2</Boton>
          <Boton handleClick={handleClick}>3</Boton>
          <Boton handleClick={handleClick}>+</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={handleClick}>4</Boton>
          <Boton handleClick={handleClick}>5</Boton>
          <Boton handleClick={handleClick}>6</Boton>
          <Boton handleClick={handleClick}>-</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={handleClick}>7</Boton>
          <Boton handleClick={handleClick}>8</Boton>
          <Boton handleClick={handleClick}>9</Boton>
          <Boton handleClick={handleClick}>*</Boton>
        </div>
        <div className="fila">
          <Boton handleClick={equal}>=</Boton>
          <Boton handleClick={handleClick}>0</Boton>
          <Boton handleClick={handleClick}>.</Boton>
          <Boton handleClick={handleClick}>/</Boton>
        </div>

        <div className="fila">
          <BotonClear handleClear={handleClear}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
