import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";

export const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("");

  const handleFieldReset = () => {
    setTitle("");
    setDescription("");
    setPrice(0);
    setThumbnail("");
    setCategory("");
  };

  const handleCreateProduct = () => {
    const data = {
      title,
      description,
      price,
      thumbnail,
      category,
    };

    if (
      title === "" ||
      description === "" ||
      price === "" ||
      thumbnail === "" ||
      category === ""
    ) {
      return alert("El titulo es obligatorio");
    }

    const db = getFirestore();

    const productsCollection = collection(db, "products");
    addDoc(productsCollection, data).then(({ id }) => {
      alert("Producto creado con exito, id: ", id);
      handleFieldReset();
    });
  };

  return (
    <div>
      <h1> Crear nuevo Producto </h1>
      <input
        type="text"
        placeholder="Titulo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Descripcion"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="text"
        placeholder="Imagen"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Categoria"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button onClick={handleCreateProduct}>Crear Producto</button>
    </div>
  );
};
