import { useState } from "react";
const Login = () => {
  
const [input, setInput] = useState("");

const handleInput = (e) => {
  setInput(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Formulario Enviado con el valor", input);
  setInput("");
};



  return (
    
    <form onSubmit={handleSubmit}>
    
    <input  
       type="text" placeholder="Ingrese el texto" 
       onChange={handleInput}
       value2={input}
       />

    <input type="submit" value="Enviar"/>

    <input type="text" placeholder="Ingrese el valor"
        value={input}
        onChange={(e) => setInput(e.target.value)}
       
    />

     <h2>{input && "El input posee un valor" }</h2>
     <input type="submit" value="Enviar"/>
    </form>

  );
};

export default Login;