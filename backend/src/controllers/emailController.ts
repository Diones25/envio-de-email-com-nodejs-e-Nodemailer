import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import SMTP_CONFIG from '../config/smtp';

export const contato = async (req: Request, res: Response) => {
  const { from, to, subject, text } = req.body;
  //Passo 1: Configurar o transporter
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
  //Passo 2: Configurar a mensagem
  let mensagem = { 
    to: to,
    subject: subject,
    text: text
  }
  //Passo 3: Enviar a mensagem
  let info = await transport.sendMail(mensagem);
  console.log(info)
  res.json({ success: true });
}
