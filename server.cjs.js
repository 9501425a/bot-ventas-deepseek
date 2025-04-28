const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send(`
    <h1>🤖 Universidad BiSeProf</h1>
    <p>¡Hola! 👋 Bienvenido a la Universidad BiSeProf 🚀</p>
    <p>¿En qué te podemos ayudar hoy?</p>
    <ul>
      <li><strong>1️⃣ Cursos de Inteligencia Artificial 📚</strong></li>
      <li><strong>2️⃣ Comprar un Bot para automatizar ventas 🤖</strong></li>
      <li><strong>3️⃣ Inscribirme directamente ✍️</strong></li>
    </ul>
    <p>Por favor responde escribiendo el número de la opción que deseas en nuestro WhatsApp o correo 📩</p>
    <p>Contáctanos directamente: <a href="https://wa.me/5214431234567" target="_blank">Escribir por WhatsApp</a></p>
    <p>Visita nuestros cursos: <a href="https://universidad.biseprof.com/" target="_blank">Universidad BiSeProf</a></p>
  `);
});

// Arranca el servidor
app.listen(port, () => {
  console.log(`🚀 Bot de Universidad BiSeProf corriendo en el puerto ${port}`);
});
