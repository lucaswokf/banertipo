import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Face from './assets/Face.png'
import Google from './assets/google.png'
import Apple from './assets/apple.png'

function App() {
  return (
    <>
      <div className='Cinza'>
        <h1 className='login'>Login</h1>
        <div className='entradas'>
          <p className='usuario'>Usuario:</p>
          <input type="text" className='caixa'/>
          <p className='usuario'>Senha</p>
          <input type="password" className='caixa' />
        </div>
        <input type="checkbox"id='conectado' className='botão'/>
        <label htmlFor="conectado">Manter Conectado</label>
        <a href="#" className='esqueceu'>esqueceu a senha?</a>
        <button className='entrar'>Entrar</button>
        <p className='logar'>logar com</p>
        <div>
          <div className="icon-social1">
              <a href="#" target="_blank">
                <img src={Face} alt="" className="Face" />
              </a>
            </div>
            <div className="icon-social">
               <a href="#" target="_blank">
                <img src={Google} alt="" className="Google" />
              </a>
            </div>
            <div className="icon-social">
              <a href="#" target="_blank">
                 <img src={Apple} alt="" className="Apple" />
              </a>
            </div>
          </div>
        <p className='nao'>NÃO TEM CONTA?<Link to="/cadastro">Ir para o cadastro</Link></p>
      </div>
    </>
  );
}

export default App;
