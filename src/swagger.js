import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerOptions = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Backend 3 - API",
      version: "1.0.0",
      description: "Documentación de la API realizada para la Entrega Final"
    }
  },
  apis: [`${__dirname}/docs/*.yaml`]
};

const swaggerSpecs = swaggerJsDoc(swaggerOptions);

export { swaggerSpecs, swaggerUi };
