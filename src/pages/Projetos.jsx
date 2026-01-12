import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projetos.css';
import site from '../assets/site.png'
import agropoint from '../assets/agropoint.png'
import batalha_naval from '../assets/batalha naval.png'
import classroom from '../assets/classroom.png'
import rco from '../assets/logo_sistema.png'
import riobonito from '../assets/Rio-Bonito-do-Iguacu.png'
import sabia from '../assets/sabia.png'
import snake from '../assets/snake.png'
import credito from '../assets/matriz_correlacao.png'

function Projetos() {
const myProjects = [
  {
    title: "leonilso-web-site",
    description:
      "Site pessoal/responsivo hospedado localmente, feito com React e Vue para apresentar informações pessoais e trabalhos, com automação com github actions.",
    imageUrl: site,
    projectUrl: "https://github.com/leonilso/leonilso-web-site",
    githubUrl: "https://github.com/leonilso/leonilso-web-site"
  },
  {
    title: "ajudaRioBonito",
    description:
      "Projeto em JavaScript voltado para ajudar a comunidade de Rio Bonito com funcionalidades interativas.",
    imageUrl: riobonito,
    projectUrl: "https://github.com/leonilso/ajudaRioBonito",
    githubUrl: "https://githubgithub.com/leonilso/ajudaRioBonito"
  },
  {
    title: "sabIA",
    description:
      "Repositório criado para Startup Week, com foco em criação de provas com inteligência artificial.",
    imageUrl: sabia,
    projectUrl: "https://github.com/leonilso/sabIA",
    githubUrl: "https://github.com/leonilso/sabIA"
  },
  {
    title: "Previsão de default em operações de crédito",
    description:
      "Previsão de casos de inadimplência utilizando Inteligência Artificial com base no histórico de dados bancários",
    imageUrl: credito,
    projectUrl: "https://github.com/leonilso/Previs-o-de-Default-em-cr-dito/",
    githubUrl: "https://github.com/leonilso/Previs-o-de-Default-em-cr-dito/"
  },
  {
    title: "ButtomRCOExtension",
    description:
      "Extensão de navegador para importar notas via CSV — utilidade prática para fluxo de trabalho.",
    imageUrl: rco,
    projectUrl: "https://github.com/leonilso/ButtomRCOExtension",
    githubUrl: "https://github.com/leonilso/ButtomRCOExtension"
  },
  {
    title: "Genetic-Algorithm-for-optimization-logistic",
    description:
      "Projeto em React-Native + FastAPI com Python — algoritmo genético para otimização logística de produção de fruticultura.",
    imageUrl: agropoint,
    projectUrl: "https://github.com/leonilso/Genetic-Algorithm-for-optimization-logistic",
    githubUrl: "https://github.com/leonilso/Genetic-Algorithm-for-optimization-logistic"
  },
  {
    title: "Google-Classroom-API-python",
    description:
      "Scripts Python para integrar com Google Classroom via API — automatiza mensagens e gestão de aulas.",
    imageUrl: classroom,
    projectUrl: "https://github.com/leonilso/Google-Classroom-API-python",
    githubUrl: "https://github.com/leonilso/Google-Classroom-API-python"
  },
  {
    title: "Batalha_Naval",
    description:
      "Jogo clássico Batalha Naval feito em JavaScript usando p5.js para lógica e visualização.",
    imageUrl: batalha_naval,
    projectUrl: "https://github.com/leonilso/Batalha_Naval",
    githubUrl: "https://github.com/leonilso/Batalha_Naval"
  },
  {
    title: "Snake_Game_in_C",
    description:
      "Implementação do jogo da cobrinha em C, rodando no terminal — projeto de lógica e estrutura básica.",
    imageUrl: snake,
    projectUrl: "https://github.com/leonilso/Snake_Game_in_C",
    githubUrl: "https://github.com/leonilso/Snake_Game_in_C"
  }
];


  return (
    <div className="fade-in">
      <h1 style={{color: 'var(--primary-green)', textAlign: 'center', marginBottom: '3rem'}}>Meus Projetos</h1>
      
      <div className="projects-grid">
        {myProjects.map((project, index) => (
          <ProjectCard
            key={index} 
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Projetos;