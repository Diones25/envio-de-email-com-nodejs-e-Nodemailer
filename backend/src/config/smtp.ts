const SMTP_CONFIG =  {
  host: "smtp.gmail.com",
  port: 587,
  user: "testediones0@gmail.com",
  pass: "yrqqxxbttdqpfjea"
}
 
export default SMTP_CONFIG;  
/*
Esse tutorial resolve o erro de login incorreto 

https://myaccount.google.com/apppasswords?pli=1&rapt=AEjHL4NJClVNaVs1RDsoYiMq8P1LT3tbep7LMWnS7AbXyPuIEtL5jwgOydYb0fY63Ugl18LRTmQHrjt8WiHNEgmKdTsnfObxog

O Google desativou os aplicativos menos seguros agora, então você precisa configurar o login com a senha do aplicativo Em resumo, você deve configurar seu acesso com autenticação de dois fatores para permitir a senha do aplicativo

transport: {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'contact@gmail.com',
    pass: 'app password',
  },
},
*/