const url = "http://localhost:8080/api/usuarios";

export const crearUsuario = async (datos) => {
  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await resp.json();

  return data;
};
