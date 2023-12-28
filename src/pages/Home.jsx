import { useEffect } from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { useGetProducts } from "../hooks/useProducts"


export const Home = () => {

    useEffect(() =>{
        document.title = "JSTORE | Home ";
    })

    const { productsData } = useGetProducts (15);

    return (
        <ItemListContainer productsData={productsData}/>
    )
}
