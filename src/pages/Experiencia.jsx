function Experiencia() {
  return (
    <div className="fade-in">
      <h1 style={{color: 'var(--primary-green)'}}>Experiência & Cursos</h1>
      
      <section>
        <h2>Experiência Profissional</h2>
        <div className="card">
          <h3>Desenvolvedor Front-end - Empresa X</h3>
          <p>2022 - Presente</p>
          <p>Trabalhando com React, Vite e integração de APIs.</p>
        </div>
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