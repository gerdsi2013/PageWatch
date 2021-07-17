import React, { useState } from "react";
import "../stylo/index.scss";
import "../stylo/response.scss"


export function Home() {

   const [name,setname] = useState('');
   const[email, setemail] = useState('');
   
   
   const Handle = ()=>{
       localStorage.setItem('Name', name);
       localStorage.setItem('Email',email);

   }   
  
  return (
    <main>
      <header>
        <div className="logo">
          <h2>WATCH</h2>
          <p>Exclusive</p>
        </div>

        <div className="redes-socias"></div>
      </header>

      <div className="container-child">
        <section className="container-child-letf">
          <h2>
          <span className="text-color" >Prepare-se</span> para melhor  
          <span className="text-friday"> Black Friday </span>de todos os 
          <span className="text-color"> Tempos</span> </h2>
          <ul>

            <li>
                Melhores marcas, com preços imperdivéis!</li>
            <li>Descontos de 50% para os primeiros 100 clientes.</li>
            <li>Parcele sua compra sem juros!</li>
          </ul>
        </section>

        <section className="container-child-rigth">
          <form className="form">
            <p>receba nossas ofertas com exclusividade!</p>

            <input
             type="text"
              name="nome"
               id="nome"
               value={name}
               onChange = {(e)=>setname(e.target.value)}
               placeholder="Digite seu nome"
               required
                />
            <input
             type="email"
              name="email"
               id="email"
               value={email}
               onChange = {(e)=>setemail(e.target.value)}
               placeholder="Digite seu email" 
               required/>
            <button id="button" type="submit" onClick={Handle}>Enviar</button>
          </form>
        </section>
      </div>
    </main>
  );
}
