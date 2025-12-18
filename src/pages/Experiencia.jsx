import ExperienciaCard from "../components/ExperienciaCard"

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
      anos: "2023 - 2025",
      descricao: "Ministrando cursos na área de tecnologia Scratch, IA, planilhas, além de automações com Classroom, Google Sheets WhatsApp e Python"
    },
    {
      profissao: "Atendente de mercado",
      anos: "2019-2021",
      descricao: "Atendimento ao público, envio de notas e configuração de sistema"
    },


  ]

  return (
    <div className="fade-in">
      <h1 style={{color: 'var(--primary-green)'}}>Experiência & Cursos</h1>
      
      <section>
        {minhasExperiencias.map((experiencia, index) => (
          <ExperienciaCard
            key ={index}
            profissao = {experiencia.profissao}
            anos = {experiencia.anos}
            descricao = {experiencia.descricao}
          />
        ))}

      </section>

      <section style={{marginTop: '2rem'}}>
        <h2>Cursos & Certificações</h2>
        <ul>
          <li>Especialista em React - Escola de Tech</li>
          <li>Arquitetura de Sistemas - Curso Online</li>
        </ul>
      </section>
    </div>
  );
}

export default Experiencia;