import { FcImport } from "react-icons/fc";
import ExperienciaCard from "../components/ExperienciaCard"
import "./Experiencia.css"

function Experiencia() {

  const minhasExperiencias = [
    {
      profissao: "Professor de programação",
      anos: "2022 - 2025",
      descricao: "Aulas de programação, gestão de processos, variádos temas"
    },
    {
      profissao: "Secretário de polo de Faculdade",
      anos: "2021 - 2025",
      descricao: "Automação de processos, envio de documentos, atendimento ao público"
    },
    {
      profissao: "Professor Formador",
      anos: "2025 - 2025",
      descricao: "Ministrando cursos na área de tecnologia Scratch, IA, planilhas, além de automações com Classroom, Google Sheets WhatsApp e Python"
    },
    {
      profissao: "Atendente de mercado",
      anos: "2019-2021",
      descricao: "Atendimento ao público, envio de notas e configuração de sistema"
    },


  ]
  const certificados = [
    {
      certificado: "INTRODUÇÃO À ANÁLISE DE DADOS - MICROSOFT POWER BI",
      certificadora: "Fundação Bradesco",
      mes: "jan",
      ano: 2026,
    },
    {
      certificado: "React Native: criando um app",
      certificadora: "Alura",
      mes: "dez",
      ano: 2025,
    },
    {
      certificado: "Techstars Startup Weekend Cascavel 2025",
      certificadora: "Techstars Startup Weekend Cascavel",
      mes: "nov",
      ano: 2025,
    },
    {
      certificado: "[Formação Docente] Ciência de dados: construindo uma análise de dados com Python",
      certificadora: "Alura",
      mes: "nov",
      ano: 2025,
    },
    {
      certificado: "Hackthon Fruit Cultura 2025",
      certificadora: "Itaipu Parquetec",
      mes: "set",
      ano: 2025,
    },
    {
      certificado: "[Formação Docente] Análise de dados: uma aventura com planilhas",
      certificadora: "Alura",
      mes: "ago",
      ano: 2025,
    },
    {
      certificado: "Página Web: criando um catálogo de vídeos com HTML e CSS",
      certificadora: "Alura",
      mes: "nov",
      ano: 2024,
    },
    {
      certificado: "Projeto de Formação Complementar em Matemática PICME-UFPR",
      certificadora: "Universidade Federal do Paraná",
      mes: "out",
      ano: 2024,
    },
    {
      certificado: "Lógica de programação: mergulhe em programação com JavaScript",
      certificadora: "Alura",
      mes: "out",
      ano: 2024,
    },
    {
      certificado: "Python: começando com a linguagem",
      certificadora: "Alura",
      mes: "set",
      ano: 2024,
    },
    {
      certificado: "Modelagem de banco de dados relacional: entendendo SQL",
      certificadora: "Alura",
      mes: "jun",
      ano: 2024,
    },
    {
      certificado: "[Formação Docente] Desenvolvimento web: ferramentas e orientações para professores",
      certificadora: "Alura",
      mes: "mai",
      ano: 2024,
    },
    {
      certificado: "Github: compartilhando seus projetos",
      certificadora: "Alura",
      mes: "fev",
      ano: 2024,
    },
    {
      certificado: "HTML5 e CSS3 parte 1: crie uma página da Web",
      certificadora: "Alura",
      mes: "nov",
      ano: 2023,
    },
    {
      certificado: "Lógica de programação: comece em lógica com o jogo Pong e JavaScript",
      certificadora: "Alura",
      mes: "jul",
      ano: 2023,
    },
  ];


  return (
    <div className="fade-in">
      <h1 style={{ color: 'var(--primary-green)' }}>Experiência & Cursos</h1>

      <section>
        <h2>Experiências profissionais</h2>
        {minhasExperiencias.map((experiencia, index) => (
          <ExperienciaCard
            key={index}
            profissao={experiencia.profissao}
            anos={experiencia.anos}
            descricao={experiencia.descricao}
          />
        ))}

      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Cursos & Certificações</h2>
        <ul className="certificados-lista">
          {certificados.map((item, index) => (
            <li key={index} className="certificado-card">
              <div className="certificado-info">
                <p className="certificado-nome">{item.certificado}</p>
                <p className="certificado-org">{item.certificadora}</p>
              </div>

              <div className="certificado-data">
                <p>{item.mes}</p>
                <p id="anos">{item.ano}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Experiencia;