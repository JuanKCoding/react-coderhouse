import { useState, useEffect } from "react";
import { getProducts } from "../services";

/**
 * @description Custom Hook for get products
 * @returns {Array}
 */

export const useGetProducts = () => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        getProducts()
        .then((response) => {
            setProductsData(response.data.products)
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return { productsData }
}