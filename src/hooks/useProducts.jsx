import { useState, useEffect } from "react";
import { getProductByCategory, getCategories } from "../services";
import { collection, getDocs, getFirestore, doc, getDoc } from "firebase/firestore";
/**
 * @description Custom Hook for get products
 * @returns {Array}
 */

export const useGetProducts = (collectionName = 'products') => {

    const [productsData, setProductsData] = useState([]);

    useEffect(() => {

        const db = getFirestore ();

        const productsCollection = collection(db, collectionName);

        getDocs(productsCollection).then((snapshot) => {
            setProductsData(
                snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                );
            });
    }, []);

    return { productsData }
}

export const useGetProductById = (collectionName = "products", id) => {
    const [productData, setProductData] = useState({});

    useEffect(() => {
        const db = getFirestore ();
        const docRef = doc(db, collectionName, id)

        getDoc(docRef).then((doc) => {
            setProductData({ id: doc.id, ...doc.data() })
        })

    }, [id]);

    return { productData }
}

export const useGetCategories = () => {
    const [categories, setCategories] = useState ([]);

    useEffect(() => {
        getCategories()
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    return { categories }
}

export const useGetProductByCategory = (category) => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        getProductByCategory(category)
        .then((response) => {
            setProductsData(response.data.products)
        })
        .catch((error) => {
            console.log(error);
        });
    }, [category]);

    return { productsData }
}