// src/App.jsx
import './App.css';
import Header from './componentes/header';
import Tarjeta from './componentes/tarjeta';
import Texto from './componentes/texto';

import tarjetas from './data/tarjetas.data';

function App() {
  return (
    <div>
    <div className="App">
      <div>
        <Header></Header>
      </div>
      <div>
        <Texto></Texto>
      </div>
      </div>
    <div>
    {tarjetas.map(tarjeta => (

    
    <Tarjeta>
      imagen={tarjeta.imagen}
      texto={tarjeta.texto}
      titulo={tarjeta.titulo}
    </Tarjeta>
    ))}
  </div>
  </div>
  );
}

export default App;
