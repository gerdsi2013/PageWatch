import { React, useState } from "react";
import "../stylo/index.scss";
import "../stylo/response.scss";
import { Footer } from "../../componets/footer/index";
import { Card } from "../../componets/card";

import RelogioCasual from "../../componets/card/assests/pexels-castorly-stock-3829441.jpg";
import RelogioElegante from "../../componets/card/assests/pexels-castorly-stock-3829446.jpg";
import Relogiosofesticado from "../../componets/card/assests/pexels-jpgshow-7846098.jpg";

export function Home() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const Handle = () => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
  };
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
            <span className="text-color">Prepare-se</span> para melhor
            <span className="text-friday"> Black Friday </span>de todos os
            <span className="text-color"> Tempos</span>
          </h2>
          <ul>
            <li>Melhores marcas, com preços imperdivéis!</li>
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
              onChange={(e) => setname(e.target.value)}
              placeholder="Digite seu nome"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Digite seu email"
              required
            />
            <button id="button" type="submit" onClick={Handle}>
              Enviar
            </button>
          </form>
        </section>

        <section className="last-child-rigth">
          <div className="section-one">
            <h2>Lançamentos</h2>
          </div>

          <div className="card">
            <Card>
              <img src={RelogioCasual} alt="relogio casual" />
            </Card>
            <Card>
              <img src={RelogioElegante} alt="relogio elegante" />
            </Card>
            <Card>
              <img src={Relogiosofesticado} alt="relogio casual" />
            </Card>
          </div>
        </section>
      </div>

      <Footer></Footer>
    </main>
  );
}
