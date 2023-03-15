![img](backend/src/assets/nodemailernodejs.png)
## Envio de E-mail com Node JS e Nodemailer
<div align="center">
  <img height="30" alt="Node" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
  <img height="30" alt="Express" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
  <img height="30" alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
</div>

## Introdução

O objetivo deste projeto é a fazer a integração com o Nodemailer para realizar o envio de e-mail com Node JS no banck-end e React JS no front-end.

## Instalação

Para rodar o projeto deve ter instalado o Node JS e o NPM e rodar os comandos abaixo:

```bash
  cd back-end
  npm install 
  npm run start
  -------------
  cd front-end
  npm install 
  npm run start
```

## Documentação da API
Para iniciar a configuração no projeto é preciso ter uma conta de e-mail que possa receber e-mail de fontes externas, foi usado nesse projeto uma conta pessoal do gmail, porém será preciso configurar uma senha de aplicativo para colocar no 'pass' na hora de configurar os dados de acesso no transporter.

### Configurando os dados do servidor de e-mail

```javascript
const SMTP_CONFIG =  {
  host: "smtp.gmail.com",
  port: 587,
  user: "testediones0@gmail.com",
  pass: "yrqqxxbttdqpfjea"
}
 
export default SMTP_CONFIG;
```
Neste código acima estão as configurações de host do gmail, a porta que o servidor utiliza, o nome de usuário que no caso é um e-mail e a senha de aplicativo que não é a mesma senha de login do e-mail, essa senha de aplicativo pode ser configurada nesse [link](https://myaccount.google.com/apppasswords?pli=1&rapt=AEjHL4PbYDKq_WSCcID4sibGIvGN_nYE7_90lzti1yQ07PeB3WlGzZrymaAXr3d5HBLZbo-rPM1THY-hK8Aiyu0i2-SZeebY6w).

### Configurando o transporter
```javascript
import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import SMTP_CONFIG from '../config/smtp';

export const contato = async (req: Request, res: Response) => {
  const { from, to, subject, text } = req.body;
  
  let transport = nodemailer.createTransport({
    host: SMTP_CONFIG.host, 
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
      user: SMTP_CONFIG.user,
      pass: SMTP_CONFIG.pass
    },
    tls: {
      rejectUnauthorized: false
    }
  });  
}
```
No código acima está sendo feito a configuração do tranporter com os dados de host, port e outros citados no código anterior do arquivo smtp.js.

### Configurando a mensagem e o envio
```javascript
import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import SMTP_CONFIG from '../config/smtp';

export const contato = async (req: Request, res: Response) => {
  const { from, to, subject, text } = req.body;
  
  let mensagem = { 
    to: to,
    subject: subject,
    text: text
  }

  let info = await transport.sendMail(mensagem);
  console.log(info)
  res.json({ success: true });  
}
```
O próximo passo é configurar a mensagem com os dados que do body, (corpo da requisição), e em seguida enviar o email com o metodo sendMail, após feita a requisição deve vir um uma mensagem de sucesso como true, como resposta da requisição e uma mensagem no console com os dados do envio da mensagem e o id dela, se houver algum erro irá aparecer no console.


## Stack utilizada

**Back-end:** Node, Express, Nodemon, Cors 

**Front-end:** React, Bootstrap, Axios

## 🚀 Sobre mim
Eu sou uma pessoa desenvolvedora full-stack, usando as tecnologias Node JS no Back-end e React no Fron-end, API Restfull e estudando outras tecnologias interessantes e em alta no mercado.

## 🛠 Habilidades
Javascript, HTML, CSS, Node JS, PHP, Mongo DB, React...

## 🔗 Links
[![GitHub](https://img.shields.io/badge/github-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Diones25)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/diones-pereira-alves-31bb3969/)
