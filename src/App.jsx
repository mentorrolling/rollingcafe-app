import { useEffect } from "react";
// import { useState } from "react";
import { login } from "./helpers/fetchAuth";
import { traerProductos } from "./helpers/fetchProductos";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const usuario = {
    email: "test1@test.com",
    password: "123456",
  };

  useEffect(() => {
    login(usuario).then((respuesta) => {
      // console.log(respuesta);
      localStorage.setItem("token", JSON.stringify(respuesta.token));
    });

    traerProductos().then((respuesta) => {
      console.log(respuesta);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
