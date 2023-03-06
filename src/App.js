import "./index.css";
import { Header } from './componentes/Header/index';
import { ProductosLista } from './componentes/Productos/index'; 
import 'boxicons';

function App() {
  return (
    <div className='App'>
      <Header />
      <ProductosLista />
    </div>
  );
}

export default App;
