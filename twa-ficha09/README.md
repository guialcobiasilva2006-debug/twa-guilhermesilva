# Ficha 09 — Arquitetura Modular, Validação e Erros · Modular Architecture, Validation and Errors

Aula 09 · Licenciatura em Engenharia Informática, ISLA Gaia

PT — Refatoração da API REST em Express 5 para uma arquitetura modular por responsabilidades e entidades (`src/entities/items/`). Inclui configuração por variáveis de ambiente (`.env` e `.env.example`), validação de dados e queries com `zod`, suporte a `PATCH` e paginação, tratamento centralizado de erros e testes automatizados com `node:assert`.

EN — Refactoring of the Express 5 REST API into a modular architecture by responsibilities and entities (`src/entities/items/`). Includes environment-based configuration (`.env` and `.env.example`), request body and query validation with `zod`, `PATCH` and pagination support, centralized error handling, and automated testing via `node:assert`.

## O que está feito / What is done
- **Configuração e Servidor (`src/config.js`, `src/server.js`, `.env`, `.env.example`)**: Leitura de variáveis de ambiente (como a porta e o ambiente), arranque do servidor HTTP e separação de configurações locais via `.gitignore`.
- **Aplicação, Validação e Erros (`src/app.js`, `src/validate.js`, `src/errors.js`)**: Composição de middlewares, `express.json()`, `/api/health`, validação declarativa com `zod` (`400` com erros por campo) e `errorHandler` centralizado (`400`, `404`, `500` sem expor stack traces).
- **Entidade Items (`src/entities/items/data.js`, `schema.js`, `router.js`)**: Gestão dos dados e `indexOf` com `notFound`, esquemas `zod` (`itemSchema`, `itemPatchSchema`, `listQuerySchema`) e rotas CRUD (`GET`, `GET /:id`, `POST`, `PUT /:id`, `PATCH /:id`, `DELETE /:id`) com pesquisa (`?q=`) e paginação (`page`, `limit`).
- **Testes (`check.mjs`)**: Verificação automatizada da API em execução (`200`, `201`, `400`, `404`, pesquisa e criação de itens).

## Declaração de Utilização de Inteligência Artificial / AI Declaration
Declaro que utilizei ferramentas de Inteligência Artificial (IA) como apoio na refatoração modular, validação com Zod, tratamento de erros, resolução de problemas nos testes e elaboração desta documentação para a realização desta Ficha 09.

## Como correr / How to run

```bash
npm install                                      # Instalar dependências · Install dependencies
cp .env.example .env                             # Criar .env a partir do exemplo · Create .env from example
npm run dev                                      # Iniciar servidor com .env e --watch · Start server with .env and --watch
BASE="http://localhost:3001/api" node check.mjs  # Correr testes (noutro terminal) · Run automated checks (another terminal)