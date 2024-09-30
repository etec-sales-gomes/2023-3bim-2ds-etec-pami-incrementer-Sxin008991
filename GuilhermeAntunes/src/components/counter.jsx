import { useState  } from "react";
import "./counter.css";

function Counter(){
    const [counter, setcounter] = useState(0);

    const incremente = () => setcounter(counter => counter + 1);
    const decremente = () => setcounter(counter => counter - 1);

    return(
        <div>
            <button onClick={incremente} classname="botao"> + </button>
            <h2 classname="numero">{counter}</h2>
            <button onClick={decremente}> - </button>
        </div>
    )
}

export default Counter