import React, { useState } from 'react';
import { sendEmail } from './services/api.js'
import "./index.css";

const Home = () => {
  const [ to, setTo ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ text, setText ] = useState('');


  const handleSendEmail = (event) => {
    event.preventDefault();
    sendEmail(to, subject, text);
    setTo('');
    setSubject('');
    setText('');
  }

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 d-flex" id='cardContainer'>
            <div className="card">
              <div className="card-header bg-info text-white">Nova Mensagem</div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="to" className="form-label">
                      Para:
                    </label>

                    <input 
                      type="text" 
                      className="form-control" 
                      id="to" 
                      value={to}  
                      onChange={(event) => setTo(event.target.value)}
                    />

                  </div>
                  <div className="mb-3">
                    <label htmlFor="to" className="form-label">
                      Assunto:
                    </label>

                    <input 
                      type="text" 
                      className="form-control" 
                      id="to" 
                      value={subject}
                      onChange={(event) => setSubject(event.target.value)}
                    />

                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                      Mensagem:
                    </label>

                    <textarea
                      className="form-control"
                      id="subject"
                      rows="3"
                      value={text}
                      onChange={(event) => setText(event.target.value)}
                    ></textarea>

                  </div>

                  <button 
                    className="btn btn-info text-white"
                    onClick={handleSendEmail}
                  >
                  Enviar</button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home