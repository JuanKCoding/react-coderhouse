import axios from "axios";


/**
 * @name getProducts
 * @description
 * @param {number} limit 
 * @returns {Promise}
 */
export async function getProducts() {
    return await axios.get ('https://dummyjson.com/products')
}