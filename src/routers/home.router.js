import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Mocking API</title>
        <style>
          body { font-family: sans-serif; padding: 2rem; }
          h1 { color: #444; }
          a { display: block; margin: 0.5rem 0; }
          form { margin-top: 2rem; }
        </style>
      </head>
      <body>
        <h1>Mocking API</h1>
        <a href="/api/mocks/mockingusers" target="_blank">🔹 Ver usuarios mockeados</a>
        <a href="/api/mocks/mockingpets" target="_blank">🔹 Ver mascotas mockeadas</a>
        <a href="/api/users" target="_blank">🔹 Ver usuarios en Mongo</a>
        <a href="/api/pets" target="_blank">🔹 Ver mascotas en Mongo</a>

        <form action="/api/mocks/generateData" method="POST">
          <h2>Generar datos en Mongo</h2>
          <label>Usuarios: <input type="number" name="users" value="10" /></label><br/>
          <label>Mascotas: <input type="number" name="pets" value="5" /></label><br/>
          <button type="submit">Generar</button>
        </form>
      </body>
    </html>
  `);
});

export default router;
