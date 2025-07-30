import './App.css'
import { Usuario } from './models/usuario';

function App() {
  const usuario = new Usuario('Lucas', 28, '123456');


  return (
    <div style={{ padding: '2rem' }}>
      <h1>{usuario.apresentar()}</h1>
      <p>
      </p>
    </div>
  );
}

export default App;