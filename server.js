const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/guardar-datos', (req, res) => {
  // Aquí puedes procesar y almacenar los datos recibidos en req.body
  // Puedes usar una base de datos, como MongoDB o PostgreSQL, o simplemente guardarlos en un archivo.
  const data = req.body;
  // Realiza operaciones de almacenamiento aquí
  console.log('Datos recibidos:', data);
  res.send('Datos almacenados exitosamente');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor Node.js en el puerto ${port}`);
});
