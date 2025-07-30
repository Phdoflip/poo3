import React, { useState } from 'react';
import './App.css';
import { Usuario } from './models/usuario';

function App() {
  const usuario = new Usuario('Lucas', 28, '123456');

  const [tentativaSenha, setTentativaSenha] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [resultado, setResultado] = useState('');
  const [permitirRedefinir, setPermitirRedefinir] = useState(false);
  const [autenticado, setAutenticado] = useState(false);

  const verificarSenha = () => {
    if (usuario.verificarSenha(tentativaSenha)) {
      setResultado('');
      setPermitirRedefinir(false);
      setAutenticado(true);
    } else {
      setResultado('Senha incorreta!');
      setPermitirRedefinir(true);
    }
  };

  const redefinirSenha = () => {
    usuario.redefinirSenha(novaSenha);
    setResultado('Senha redefinida com sucesso!');
    setPermitirRedefinir(false);
    setNovaSenha('');
    setTentativaSenha('');
  };

  const logout = () => {
    setAutenticado(false);
    setTentativaSenha('');
    setResultado('');
  };

  return (
    <div className="container">
      <div className="card fade-card">
        <h1 className={autenticado ? 'fade-text show' : ''}>
          {autenticado ? usuario.apresentar() : 'Entre no sistema'}
        </h1>
        {!autenticado && (
          <div className="fade-elements">
            <input
              type="password"
              placeholder="Digite a senha"
              value={tentativaSenha}
              onChange={(e) => setTentativaSenha(e.target.value)}
            />
            <button className="btn-primary" onClick={verificarSenha}>Entrar</button>

            {permitirRedefinir && (
              <>
                <input
                  type="password"
                  placeholder="Nova senha"
                  value={novaSenha}
                  onChange={(e) => setNovaSenha(e.target.value)}
                />
                <button className="btn-danger" onClick={redefinirSenha}>Redefinir Senha</button>
              </>
            )}

            <p>{resultado}</p>
          </div>
        )}

        {autenticado && (
          <div className="fade-elements">
            <button className="btn-danger" onClick={logout}>Sair</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
