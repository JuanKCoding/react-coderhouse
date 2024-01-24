//import { useContext, useEffect, useState } from "react";
//import { CartContext } from "../context/CartContext";
//import { collection, query, where, getDocs, getFirestore } from "firebase/firestore"

//export const Cart = () => {
//    const {products, setProducts} = useState ([]);
//    const { count } = useContext(CartContext);
//  
//    const idsList = count.map((item) => item.id);
//   


//    useEffect(() => {
//        if(idsList.length !== 0) {
//            const db = getFirestore();
//            const itemCollection = collection(db, "products");

//            const q = query(itemCollection, where("id", "in", idsList));

//        getDocs(q).then((querySnapshot) => {
//            querySnapshot.forEach((doc) => {
//                setProducts([...products, doc.data()])
//            });
//       });
//        }
//    }, []);

//    console.log(setProducts)

//  return count.length === 0 ? (<h1>No hay productos en el carrito</h1>) : null;

//};
