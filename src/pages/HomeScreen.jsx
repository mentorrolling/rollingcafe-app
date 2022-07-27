import React, { useEffect, useState } from "react";
import { traerProductos } from "../helpers/fetchProductos";

const HomeScreen = () => {
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);

  const [registro, setRegistro] = useState(0);

  useEffect(() => {
    cargarProductos();
  }, [registro]);

  const cargarProductos = async () => {
    const { productos, total } = await traerProductos(registro);
    console.log(productos);
    setProductos(productos);
    setTotal(total);
  };

  const nextPag = () => {
    if (total - registro >= 5) {
      setRegistro(registro + 5);
    }
  };

  const prevPag = () => {
    if (registro !== 0) {
      setRegistro(registro - 5);
    }
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <h1>Rolling Café</h1>
          <hr />
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-2">
        {productos.map((producto) => (
          <div className="col" key={producto._id}>
            <div className="card h-100">
              <img
                src="https://dam.cocinafacil.com.mx/wp-content/uploads/2021/04/licor-de-cafe-con-leche.jpg"
                className="card-img-top"
                alt="cafe"
              />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <span className="badge rounded-pill bg-success">
                  ${producto.precio}
                </span>
                {producto.disponible ? (
                  <span className="badge rounded-pill bg-warning ms-2">
                    Disponible
                  </span>
                ) : (
                  <span className="badge rounded-pill bg-danger ms-2">
                    No disponible
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary me-2" onClick={prevPag}>
            Prev
          </button>
          <button className="btn btn-primary" onClick={nextPag}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
