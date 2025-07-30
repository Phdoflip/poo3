import './App.css'
import { Usuario } from './models/usuario';


function App() {
  const usuario = new Usuario('joão', 28);
  const usuario2 = new Usuario('maria', 25);
  return (
    <div style={{ padding: '2rem' }}>
      <h1>{usuario.apresentar()}</h1>
      <h1>{usuario2.apresentar()}</h1>
      <p>
      </p>
    </div>
  );
}

export default App;