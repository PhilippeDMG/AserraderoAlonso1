const express = require("express");
const { createServer } = require("vite");
const path = require("path");

async function start() {
  const app = express();

  // Configuración de Vite
  const vite = await createServer({
    root: path.resolve(__dirname, "src"),
    server: {
      middlewareMode: true,
    },
  });

  // Servir la página de inicio
  app.get("/", async (req, res) => {
    try {
      const page = await vite.transformIndexHtml("/", await vite.ssrLoadModule("../frontend/src/main.jsx"));
      res.status(200).send(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).send(e.message);
    }
  });

  // Servir las demás páginas
  app.get("/:page", async (req, res) => {
    const page = req.params.page;
    try {
      const pagePath = `../frontend/src/pages/${page}.jsx`;
      await vite.ssrLoadModule(pagePath).catch(() => {
        throw new Error(`No se encontró la página ${page}`);
      });
      const pageContent = await vite.transformIndexHtml(page, await vite.ssrLoadModule(pagePath));
      res.status(200).send(pageContent);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(404).send(e.message);
    }
  });

  // Escuchar en el puerto 3000
  app.listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000");
  });
}

start();