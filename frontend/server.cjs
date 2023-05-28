/* eslint-disable no-undef */
const express = require('express');
const app = express();
const path = require('path');
// Servir archivos estáticos desde el directorio 'assets'
app.use('/assets', express.static(path.join(__dirname + '/dist/assets/'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

// Servir archivos estáticos desde los directorios de cada página
app.use(express.static(__dirname + '/dist/src/pages/inicio/'));
app.use('/contacto', express.static(path.join(__dirname + '/dist/src/pages/contactenos/')));
app.use('/servicios', express.static(path.join(__dirname + '/dist/src/pages/servicios/')));
app.use('/nosotros', express.static(path.join(__dirname + '/dist/src/pages/sobreNosotros/')));

// Servir archivos estáticos desde el directorio raíz
app.use(express.static(path.join(__dirname + '/dist/')));

// Rutas para cada página
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/src/pages/inicio/index.html')) 
})

app.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/src/pages/contactenos/index.html'))
}) 

app.get('/servicios', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/src/pages/servicios/index.html'))
})  

app.get('/nosotros', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/src/pages/sobreNosotros/index.html'))
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})