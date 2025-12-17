import React from 'react';
import './Contato.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa'; // Precisaremos instalar react-icons

function Contato() {
  return (
    <div className="contato-container fade-in">
      <h1 className="section-title">Vamos Conversar?</h1>
      <p className="subtitle">Tens uma proposta, uma dúvida ou apenas queres dizer olá? Escolhe o melhor caminho:</p>

      <div className="contato-content">
        {/* Lado Esquerdo: Redes Sociais */}
        <div className="contato-info">
          <div className="info-item">
            <FaEnvelope className="icon" />
            <div>
              <h3>E-mail</h3>
              <p>teuemail@exemplo.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaLinkedin className="icon" />
            <div>
              <h3>LinkedIn</h3>
              <a href="https://linkedin.com/in/teu-perfil" target="_blank" rel="noreferrer">/in/teu-perfil</a>
            </div>
          </div>

          <div className="info-item">
            <FaGithub className="icon" />
            <div>
              <h3>GitHub</h3>
              <a href="https://github.com/teu-user" target="_blank" rel="noreferrer">@teu-user</a>
            </div>
          </div>
        </div>

        {/* Lado Direito: Formulário */}
        <form className="contato-form">
          <div className="form-group">
            <label>Nome</label>
            <input type="text" placeholder="Teu nome" required />
          </div>
          
          <div className="form-group">
            <label>E-mail</label>
            <input type="email" placeholder="Teu e-mail" required />
          </div>

          <div className="form-group">
            <label>Mensagem</label>
            <textarea rows="5" placeholder="Como posso ajudar?"></textarea>
          </div>

          <button type="submit" className="btn-enviar">Enviar Mensagem</button>
        </form>
      </div>
    </div>
  );
}

export default Contato;