# Ficha 08 — Uma API REST com Express · A REST API with Express

Aula 08 (12/11/2026) · Licenciatura em Engenharia Informática, ISLA Gaia[cite: 8]

PT — Desenvolvimento de uma API RESTful em Node.js com Express 5. Implementação de rotas CRUD completas (`GET`, `POST`, `PUT`, `DELETE`) modularizadas num `Router()`, leitura de payloads JSON com `express.json()`, validação de dados no servidor, middlewares personalizados (logger e 404 em JSON) e testes automatizados com `node:assert`[cite: 8, 9, 10, 11, 12].

EN — Development of a RESTful API in Node.js using Express 5. Implementation of full CRUD routes (`GET`, `POST`, `PUT`, `DELETE`) modularized in a `Router()`, JSON payload parsing with `express.json()`, server-side validation, custom middlewares (logger and JSON 404), and automated testing via `node:assert`[cite: 8, 9, 10, 11, 12].

## O que está feito / What is done
- **Servidor HTTP (`src/app.js`)**: Configuração do Express 5 com logger de pedidos, `express.json()`, rota de saúde `/api/health` e handler global de 404 em JSON[cite: 9, 10, 12, 13].
- **Router de Catálogo (`src/items/router.js`)**: Endpoints para listagem com pesquisa (`?q=`), detalhe (`/:id`), criação com validação (`POST`), atualização (`PUT`) e remoção (`DELETE`)[cite: 9, 10, 11, 12, 13].
- **Testes (`check.mjs`)**: Script de verificação automática de estados HTTP (`200`, `201`, `400`, `404`) e persistência em memória[cite: 10, 11].

## Declaração de Utilização de Inteligência Artificial / AI Declaration
Declaro que utilizei ferramentas de Inteligência Artificial (IA) como apoio na estruturação da API, organização dos middlewares e elaboração da documentação para a realização desta Ficha 08.

## Como correr / How to run

```bash
npm install     # Instalar dependências · Install dependencies
npm run dev     # Iniciar servidor na porta 3000 · Start server on port 3000
node check.mjs  # Correr testes (noutro terminal) · Run automated checks


RESPOSTA ÀS QUESTÕES DE REFLEXÃO:

1. Quem decide o estado HTTP e porque é que o fetch não lança erro num 404?

O servidor decide o código de estado através de res.status(). O fetch não rejeita num 404 porque a comunicação de rede teve sucesso e o servidor respondeu; o erro é da lógica da aplicação, não da rede.   


2. Porque é que express.json() tem de estar antes das rotas e o que acontece sem Content-Type: application/json?

Como os middlewares correm por ordem sequencial, tem de processar o corpo antes de chegar às rotas. Sem esse cabeçalho, o Express ignora o corpo, req.body fica undefined e a validação devolve 400 Bad Request.   


3. Compara a criação em memória no servidor com o create() local do M1 e o que muda no M2.

Em ambos os casos os dados vivem em memória RAM e perdem-se ao reiniciar. A diferença é que agora a memória está centralizada no servidor. No M2, o array será substituído pelo MongoDB para persistência definitiva.   



4. Compara o GET /api/items/:id em Express (Node) vs Laravel (PHP) e o funcionamento do array em memória.

A estrutura de rotas e respostas JSON é semelhante, mas o Laravel oferece uma arquitetura MVC completa de raiz. Um array em memória funciona em Node porque o processo fica ativo continuamente; em PHP, cada pedido arranca e destrói o processo, apagando a memória[cite: 14].
