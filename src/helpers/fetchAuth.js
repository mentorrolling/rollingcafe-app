const url = "http://localhost:8080/api/auth/login";

export const login = async (datos) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(datos),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await response.json();

  return data;
};
