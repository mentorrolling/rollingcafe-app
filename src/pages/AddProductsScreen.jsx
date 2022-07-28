import React, { useEffect } from "react";
import { traerCategorias } from "../helpers/fetchCategorias";

const AddProductsScreen = () => {
  useEffect(() => {
    obtenerCategorias();
  }, []);

  const obtenerCategorias = async () => {
    const categorias = await traerCategorias();
    console.log(categorias);
  };

  return <div>AddProductsScreen</div>;
};

export default AddProductsScreen;
