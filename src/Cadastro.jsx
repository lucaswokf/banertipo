import React from "react";
import "./App.css";
import { Link } from "react-router";
import Face from './assets/Face.png'
import Google from './assets/google.png'
import Apple from './assets/apple.png'


function Cadastro() {
  return (
    <>
       <div className='Cinza'>
        <h1 className='login'>Cadastro</h1>
        <div className='entradas'>
          <p className='usuario'>nome:</p>
          <input type="text" className='caixa'/>
          <p className='usuario'>email:</p>
          <input type="text" className='caixa' />
          <p className='usuario'>cpf:</p>
          <input type="text" className='caixa' />
          <p className='usuario'>usuario:</p>
          <input type="text" className='caixa' />
          <p className='usuario'>senha:</p>
          <input type="password" className='caixa' />
        </div>
        <button className='entrar'>Cadastrar</button>
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
        <p className='nao'>JA TEM CONTA?<Link to="/">Logar</Link></p>
      </div>
    </>
  );
}

export default Cadastro;
