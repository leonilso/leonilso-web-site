import React from 'react';
import ProjectCard from '../components/ProjectCard'; // Importa o componente ProjectCard
import './Projetos.css'; // Opcional: para estilos específicos da página de projetos

function Projetos() {
  // Array de objetos com os dados dos seus projetos
  const myProjects = [
    {
      title: "Meu E-commerce Frontend",
      description: "Um projeto de e-commerce responsivo construído com React e Context API para gestão de estado.",
      imageUrl: "https://via.placeholder.com/400x200/10b981/0b0f0c?text=Ecommerce", // Substitua por sua imagem real
      projectUrl: "https://seulink.com/ecommerce",
      githubUrl: "https://github.com/seugithub/ecommerce"
    },
    {
      title: "Blog Pessoal com Markdown",
      description: "Um blog estático que renderiza posts em Markdown, focado em performance e SEO.",
      imageUrl: "https://via.placeholder.com/400x200/151d18/e2e8f0?text=Blog+Pessoal", // Substitua por sua imagem real
      projectUrl: "https://seulink.com/blog",
      githubUrl: "https://github.com/seugithub/blog"
    },
    {
        title: "Landing Page Empresarial",
        description: "Landing page moderna e animada para uma empresa de tecnologia, usando Scroll Reveal.",
        imageUrl: "https://via.placeholder.com/400x200/0b0f0c/10b981?text=Landing+Page", // Substitua por sua imagem real
        projectUrl: "https://seulink.com/landing",
        githubUrl: "https://github.com/seugithub/landing"
      },
  ];

  return (
    <div className="fade-in">
      <h1 style={{color: 'var(--primary-green)', textAlign: 'center', marginBottom: '3rem'}}>Meus Projetos</h1>
      
      <div className="projects-grid">
        {myProjects.map((project, index) => (
          <ProjectCard
            key={index} // Sempre use uma key única em listas no React
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