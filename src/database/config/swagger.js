const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Flashcards API",
      version: "1.0.0",
      description: "API documentation for Flashcards project",
    },
    servers: [{ url: "http://localhost:5555" }],
  },
  apis: ["./src/routes/*.js", "./src/docs/*.js"], // path to docs
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
