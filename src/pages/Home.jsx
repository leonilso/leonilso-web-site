import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container fade-in">
      <section className="hero">
        <div className="hero-content">
          <span className="greeting">Olá, eu sou</span>
          <h1 className="name">Leonilso F. Wrublak <span className="dot">.</span></h1>
          <h2 className="role">Professor e Desenvolvedor Full-Stack</h2>
          <p className="description">
            Especializado em construir experiências digitais modernas, 
            focadas em eficiência e automação de tarefas. Atualmente focado na docência de progamação em Ciência de Dados com Python, Banco de Dados com SQL, programação Mobile com React-Native e Pensamento Computacional com Scratch e JavaScript. Dedicando meus esforços para que as novas gerações adquiram gosto e conhecimento pela tecnologia.
          </p>
          
          <div className="hero-buttons">
            <Link to="/projetos" className="btn-primary">Ver Projetos</Link>
            <Link to="/contato" className="btn-secondary">Entrar em Contato</Link>
          </div>
        </div>

        {/* Círculo decorativo de fundo */}
        <div className="hero-decoration"></div>
      </section>

      <section className="highlights">
        <div className="stat">
          <span className="stat-number">7+</span>
          <span className="stat-label">Anos de Estudo</span>
        </div>
        <div className="stat">
          <span className="stat-number">25+</span>
          <span className="stat-label">Projetos Criados</span>
        </div>
        <div className="stat">
          <span className="stat-number">15+</span>
          <span className="stat-label">Cursos Concluídos</span>
        </div>
      </section>
    </div>
  );
}

export default Home;