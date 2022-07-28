const url = "http://localhost:8080/api/productos";

export const traerProductos = async (registro = 0) => {
  const response = await fetch(`${url}?desde=${registro}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();

  return data;
};
