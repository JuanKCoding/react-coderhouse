import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//Importacion de estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {

  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <NavBarComponent/>
      <ItemListContainer greeting= "Bienvenidos a la JStore"/>
    </div>
)

}

export default App;
