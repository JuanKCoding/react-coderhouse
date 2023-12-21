import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent'
import { useGetProducts } from './hooks/useProducts';


const App = () => {

  const { productsData } = useGetProducts();

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <NavBarComponent />
      <ItemListContainer productsData={productsData}/>
    </div>
  );
};

export default App;
