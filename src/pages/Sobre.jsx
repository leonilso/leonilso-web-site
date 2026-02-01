import React from 'react';
import './Sobre.css';
import { FaCode, FaServer, FaToolbox, FaGraduationCap, FaNetworkWired } from 'react-icons/fa';

function Sobre() {
  const skills = [
    { name: "Frontend", tools: "React, React-Native, JavaScript (ES6+), HTML5, CSS3, Vite" },
    { name: "Estilização", tools: "Styled Components, CSS Modules" },
    { name: "Backend", tools: "Node.js, Express, PHP, SQL" },
    { name: "Ferramentas", tools: "Git, GitHub, VS Code, Figma, Scratch" },
    { name: "Infraestrutura", tools: "Linux, Firewall (ufw), DNS (pi-hole), fail2ban, SSH" },
  ];

  return (
    <div className="sobre-container fade-in">
      <h1 className="section-title">Sobre <span className="highlight">Mim</span></h1>

      <div className="sobre-content">
        {/* Lado Esquerdo: Texto e História */}
        <div className="sobre-texto">
          <p>
            Olá! Meu nome é <strong>Leonilso Fandres Wrublak</strong>. Minha jornada na tecnologia começou muito novo, com 14 anos, fascinado por jogos e sem disponibilidade de uma máquina poderosa decidi que iria criar meu próprio game, aprendi lógica de programação com portugol no Youtube. Após os fundamentos da lógica computacional fui em busca de meu sonho e a partir da Unity com <strong>C#</strong> comecei meu caminho da programação de verdade.
          </p>
          <p>
            Limitado pelo poder computacional de um notebook antigo, meu sonho foi adiado por alguns anos. Mas mesmo assim, com o tempo livre proporcionado pela pandemia do COVID-19, me aprofundei no desenvolvimento Web, aprendendo os primeiros passos com <strong>HTML</strong>, <strong>CSS</strong> e <strong>JS</strong>. Isso me instigou a cada vez mais buscar sobre tecnologia, expandindo minha procura por outras áreas tecnológicas.
          </p>
          <p>
            Ao final do ensino médio me encontrei em dúvida do caminho a se seguir, economia, uma área que me deixava instigado e curioso, ou computação, em que me sentia confortável e confiante. Acabei optando por ambas, iniciei meu curso de Ciências Econômicas na Universidade Federal da Fronteira Sul, e também o curso de Informática Licenciatura pela faculdade UNINA. No decorrer dos anos de Formação utilizei meus conhecimentos prévios para facilitar minha vida e automatizar elaboração de trabalhos.
          </p>
          <p>
            Durante as faculdades acabei entrando no programa PIC-ME, pela Universidade Federal do Paraná, onde desenvolvi e apresentei trabalhos focados em otimização, métodos numéricos e Inteligência Artificial. Nesse período resolvi problemas usando Método dos Mínimos Quadrados, Métodos dos Elementos Fínitos, Machine Learning e Deep Learning. Onde me apronfundei na linguagem <strong>Python</strong> e conheci a linguagem <strong>Julia</strong>. Apliquei esses conhecimentos a problemas teóricos, mas também à soluções reais, como a dispersão de calor em materiais metálicos e a predição de default em operaçõs de crédito.
          </p>
          <p>
            Durante o segundo ano de faculdade consegui trabalho como professor temporário do Estado do Paraná, atuando como docente na área de tecnologia para a eduação básica, nesse período participei de formaçòes de professores voltadas para área tecnológica, em desenvolvimento Front-end, automação e docência do Pensamento Computacional. No terceiro ano como docente dado a experência adiquirida fui em direção da docência na educação profissional, com o Ensino Médio Profissionalizante no Centro Estadual de Educação Profissional Naiana Babaresco de Souza. Para além disso nos cursos que inicialemente participava como discente, participei do processo seletivo e me tornei docente como professor formador do estado do Paraná.
          </p>
          <p>
            Durante os anos de 2024 e 2025 minha caminhada na programação só evoluiu, pelas exigências como professor e trabalhos exigidos durante a graduação meus conhecimentos ganharam capilaridade, onde me aprofundei na área de <strong>DEVOPS</strong>, na <strong>infraestrutura de redes</strong>, (por exemplo esse site está hospedado em meu <strong>homelab</strong>), além de criar projetos utilizando <strong>React Native</strong>, APIs usando <strong>Node</strong>, bancos de dados usando <strong>SQL</strong>, automações com Google <strong>App Script</strong>, além de projetos menores para aprendizado com <strong>Python</strong>, <strong>C++</strong> e <strong>PHP</strong>.
          </p>


        </div>

        {/* Lado Direito: Skills/Habilidades */}
        <div>
          <div className="educacao-container">
            <div className="edu-item">
              <div>
                <h4>Formação Acadêmica</h4>
                <p>Informática (Licenciatura) - UNINA</p>
                <p>Ciências Econômicas (Bacharelado) - UFFS</p>
              </div>
              <FaGraduationCap className="icon-green" />
            </div>
          </div>

          <div className="sobre-skills">
            <h3>Minhas Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  {index === 0 && <FaCode className="icon-green" />}
                  {index === 1 && <FaToolbox className="icon-green" />}
                  {index === 2 && <FaServer className="icon-green" />}
                  {index === 3 && <FaToolbox className="icon-green" />}
                  {index === 4 && <FaNetworkWired className="icon-green" />}
                  <h4>{skill.name}</h4>
                </div>
                <p>{skill.tools}</p>
              </div>
            ))}
          </div>


        </div>
      </div>
    </div>
  );
}

export default Sobre;