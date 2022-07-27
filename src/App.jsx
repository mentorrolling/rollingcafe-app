import { useEffect, useState } from "react";
// import { useState } from "react";
import { login } from "./helpers/fetchAuth";
import { traerProductos } from "./helpers/fetchProductos";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);
  const usuario = {
    email: "test1@test.com",
    password: "123456",
  };

  useEffect(() => {
    inicioSesion();
    listarProductos();
  }, []);

  const inicioSesion = async () => {
    const { token } = await login(usuario);
    localStorage.setItem("token", JSON.stringify(token));
  };

  const listarProductos = async () => {
    const { total, productos } = await traerProductos();
    setProductos(productos);
    setTotal(total);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
