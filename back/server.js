/* eslint-disable no-undef */
const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');

app.use(cors());
app.use(express.json());
// Servir archivos estáticos desde el directorio 'assets'
app.use('/assets', express.static(__dirname + '/../frontend/dist/assets/', {
  setHeaders: (res, path) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));
// Servir archivos estáticos desde los directorios de cada página
app.use(express.static(__dirname + '/../frontend/dist/src/pages/inicio/'));
app.use('/contacto', express.static(__dirname + '/../frontend/dist/src/pages/contactenos/'));
app.use('/servicios', express.static(__dirname + '/../frontend/dist/src/pages/servicios/'));
app.use('/nosotros', express.static(__dirname + '/../frontend/dist/src/pages/sobreNosotros/'));
// Servir archivos estáticos desde el directorio raíz
app.use(express.static(__dirname + '/../frontend/dist/'));

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'manuelnoru@gmail.com', // Cambiar con la dirección de correo electrónico del remitente
      pass: 'rvor wquk dcay rdez' // Cambiar con la contraseña del correo electrónico del remitente
    }
  });

  const mailOptions = {
    from: 'manuelnoru@gmail.com', // Cambiar con la dirección de correo electrónico del remitente
    to: 'manuelnoru@gmail.com', // Cambiar con la dirección de correo electrónico del destinatario
    subject: 'New message from your website',
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Rutas para cada página
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../frontend/dist/src/pages/inicio/index.html') 
})

app.get('/contacto', (req, res) => {
  res.sendFile(__dirname + '/../frontend/dist/src/pages/contactenos/index.html')
}) 

app.get('/servicios', (req, res) => {
  res.sendFile(__dirname + '/../frontend/dist/src/pages/servicios/index.html')
})  

app.get('/nosotros', (req, res) => {
  res.sendFile(__dirname + '/../frontend/dist/src/pages/sobreNosotros/index.html')
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})