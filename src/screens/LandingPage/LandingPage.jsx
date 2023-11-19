import React from "react";
import { Sobre } from "../../components/Sobre";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/s14UGa5m/img/rectangle-3-1.svg" />
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/s14UGa5m/img/rectangle-2-1.svg" />
          <img className="rectangle-2" alt="Rectangle" src="https://c.animaapp.com/s14UGa5m/img/rectangle-4-1.svg" />
          <img className="rectangle-3" alt="Rectangle" src="https://c.animaapp.com/s14UGa5m/img/rectangle-1.svg" />
          <div className="section-footercopy">
            <div className="coluna">
              <img className="line" alt="Line" src="https://c.animaapp.com/s14UGa5m/img/line-1.svg" />
            </div>
            <div className="div-wrapper">
              <p className="text-wrapper">2023 Infografic. Todos direitos reservados</p>
            </div>
          </div>
          <div className="section-footer">
            <div className="div">
              <div className="contato">
                <img className="OIG" alt="Oig" src="https://c.animaapp.com/s14UGa5m/img/oig--1--1-1@2x.png" />
                <div className="text-wrapper-2">(00)00000-0000</div>
                <div className="text-wrapper-3">contato@hq.com</div>
              </div>
            </div>
            <div className="div">
              <div className="text-wrapper-4">Menu</div>
              <div className="divisao-de-coluna">
                <div className="coluna-2">
                  <div className="text-wrapper-5">Home</div>
                  <div className="text-wrapper-6">Vantagens</div>
                </div>
                <div className="coluna-2">
                  <div className="text-wrapper-5">Contato</div>
                  <div className="text-wrapper-6">Entrar</div>
                </div>
              </div>
            </div>
            <div className="div">
              <div className="text-wrapper-7">Social</div>
              <div className="divisao-de-coluna">
                <div className="coluna-2">
                  <div className="text-wrapper-5">Twitter</div>
                  <div className="text-wrapper-6">Facebook</div>
                </div>
                <div className="coluna-2">
                  <div className="text-wrapper-5">Instagram</div>
                  <div className="text-wrapper-6">Linkedin</div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-header">
            <div className="coluna-LOGO">
              <img className="OIG-2" alt="Oig" src="https://c.animaapp.com/s14UGa5m/img/oig--1--1@2x.png" />
            </div>
            <div className="coluna-navbar">
              <div className="navbar">
                <Sobre className="sobre-instance" divClassName="design-component-instance-node" text="HOME" />
                <Sobre className="sobre-instance" divClassName="design-component-instance-node" text="VANTAGENS" />
                <Sobre className="sobre-instance" divClassName="design-component-instance-node" text="CONTATO" />
              </div>
            </div>
            <div className="coluna-botao">
              <div className="botao">
                <div className="text-wrapper-8">ENTRAR</div>
              </div>
            </div>
          </div>
          <div className="section-quarta-dobra">
            <img className="form" alt="Form" src="https://c.animaapp.com/s14UGa5m/img/form.png" />
          </div>
          <div className="section-terceira">
            <div className="div-2">
              <div className="icone-evite">
                <img
                  className="evite-multidoes"
                  alt="Evite multidoes"
                  src="https://c.animaapp.com/s14UGa5m/img/evite-multidoes-2@2x.png"
                />
              </div>
              <div className="text-wrapper-9">Evite Multidões</div>
              <div className="rectangle-4" />
              <p className="p">
                Adquira suas senhas de espera remotamente, eliminamos a necessidade de presença física no hospital,
                proporcionando um ambiente mais confortável e seguro para todos.
              </p>
            </div>
            <div className="div-2">
              <div className="icone-em-tempo-real">
                <img className="tempo" alt="Tempo" src="https://c.animaapp.com/s14UGa5m/img/tempo-1@2x.png" />
              </div>
              <div className="text-wrapper-9">Em tempo real</div>
              <div className="rectangle-4" />
              <p className="text-wrapper-10">
                Acompanhe em tempo real o andamento da fila e o tempo estimado para iniciar a triagem. Isso proporciona
                a você uma visão transparente do processo, permitindo que você planeje sua chegada de forma conveniente,
                evitando esperas desnecessárias.
              </p>
            </div>
            <div className="div-2">
              <img
                className="icone-em-tempo-real-2"
                alt="Icone em tempo real"
                src="https://c.animaapp.com/s14UGa5m/img/icone---em-tempo-real.svg"
              />
              <div className="text-wrapper-9">Otimize tempo</div>
              <div className="rectangle-4" />
              <p className="com-apenas-alguns">
                Com apenas alguns cliques, você pode garantir o seu lugar na&nbsp;&nbsp;fila, eliminando a necessidade
                de longas esperas presenciais. Isso significa que você ganha tempo e evita o incômodo de esperar em
                filas intermináveis.
              </p>
            </div>
          </div>
          <div className="section-segunda">
            <div className="coluna-imagens">
              <div className="position-absolute">
                <div className="overlap-group">
                  <img className="ellipse" alt="Ellipse" src="https://c.animaapp.com/s14UGa5m/img/ellipse-1.png" />
                  <img
                    className="rectangle-5"
                    alt="Rectangle"
                    src="https://c.animaapp.com/s14UGa5m/img/rectangle-4@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="coluna-textos">
              <div className="em-qualquer-lugar">
                <div className="icone-em-qualquer">
                  <img
                    className="em-qualquer-lugar-2"
                    alt="Em qualquer lugar"
                    src="https://c.animaapp.com/s14UGa5m/img/em-qualquer-lugar-2@2x.png"
                  />
                </div>
                <div className="text-wrapper-9">Em qualquer lugar</div>
                <div className="rectangle-4" />
                <p className="text-wrapper-11">
                  Adquira a senha de espera em qualquer lugar, seja em casa, no trabalho ou em qualquer local de Osasco.
                </p>
              </div>
            </div>
          </div>
          <div className="section-primeria">
            <div className="coluna-textos-2">
              <p className="text-wrapper-12">Cadastre-se e Simplifique sua Experiência no Hospital</p>
              <p className="text-wrapper-13">Acesso Rápido à Fila de Espera e Mais Vantagens Exclusivas!</p>
              <div className="botao-cadastrar">
                <div className="text-wrapper-14">CADASTRAR</div>
              </div>
            </div>
            <div className="position-absolute-wrapper">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <img
                    className="rectangle-6"
                    alt="Rectangle"
                    src="https://c.animaapp.com/s14UGa5m/img/rectangle-2.png"
                  />
                  <img
                    className="rectangle-7"
                    alt="Rectangle"
                    src="https://c.animaapp.com/s14UGa5m/img/rectangle-3@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
