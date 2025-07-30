import React, { useState } from 'react';
import './App.css';
import { Usuario } from './models/usuario';

function App() {
  const usuario = new Usuario('Lucas', 28, '123456');

  const [tentativaSenha, setTentativaSenha] = useState('');
  const [resultado, setResultado] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [permitirRedefinir, setPermitirRedefinir] = useState(false);

  const verificarSenha = () => {
    if (usuario.verificarSenha(tentativaSenha)) {
      setResultado('Senha correta!');
      setPermitirRedefinir(false);
    } else {
      setResultado('Senha incorreta! Deseja redefinir?');
      setPermitirRedefinir(true);
    }
  };

  const redefinirSenha = () => {
    usuario.redefinirSenha(novaSenha);
    setResultado('Senha redefinida com sucesso!');
    setNovaSenha('');
    setTentativaSenha('');
    setPermitirRedefinir(false);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{usuario.apresentar()}</h1>

      <div>
        <input
          type="password"
          placeholder="Digite a senha atual"
          value={tentativaSenha}
          onChange={(e) => setTentativaSenha(e.target.value)}
        />
        <button onClick={verificarSenha}>Verificar Senha</button>
      </div>

      {permitirRedefinir && (
        <div style={{ marginTop: '1rem' }}>
          <input
            type="password"
            placeholder="Nova senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
          <button onClick={redefinirSenha}>Redefinir Senha</button>
        </div>
      )}

      <p>{resultado}</p>
    </div>
  );
}

export default App;
