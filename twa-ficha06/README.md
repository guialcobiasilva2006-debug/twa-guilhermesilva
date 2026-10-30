# Ficha 06 — Rotas e Paginação em Vue · Routes and Pagination in Vue

Aula 06 (29/10/2026) · Licenciatura em Engenharia Informática, ISLA Gaia

PT — Evolução da aplicação web em Vue 3 com a introdução do **Vue Router** para suporte de múltiplos URLs (`/`, `/items/new`, `/items/:id`, `/pokemon` e rota apanha-tudo 404). Migração do estado global do catálogo para um store independente ao nível do módulo (`store.js`) para persistir durante a navegação. Implementação de paginação síncrona com a PokéAPI através de parâmetros na query do URL (`route.query.page`) e sincronização reativa com `watch`.

EN — Web application evolution in Vue 3 introducing **Vue Router** for multi-URL support (`/`, `/items/new`, `/items/:id`, `/pokemon`, and a 404 catch-all route). Migration of the global catalog state to a module-level store (`store.js`) to persist across navigation. Implementation of synchronous pagination with the PokéAPI using URL query parameters (`route.query.page`) and reactive synchronization via `watch`.

## O que está feito / What is done
- **Vue Router**: Configuração de rotas estáticas e dinâmicas com `createRouter` e encapsulamento da moldura principal em `<nav>`, `<RouterLink>` e `<RouterView>`.
- **Store Modular (`store.js`)**: Gestão de dados assíncronos e funções de carregamento fora dos componentes, permitindo a sobrevivência do estado entre mudanças de página.
- **Página PokéAPI (`/pokemon`)**: Listagem paginada onde o URL (`?page=N`) atua como fonte de verdade absoluta, integrando botões de navegação e atualização reativa por `watch`.
- **Componentes de Ecrã (`src/pages/`)**: Organização modular de `CatalogPage`, `ItemPage`, `NewItemPage` e `NotFound`.

## Declaração de Utilização de Inteligência Artificial / AI Declaration
Declaro que utilizei ferramentas de Inteligência Artificial (IA) como apoio na estruturação do código, resolução de dúvidas sobre o Vue Router e organização da documentação para a realização desta Ficha 06.

## Como correr / How to run

```bash
npm install     # Instalar dependências · Install dependencies
npm run dev     # Iniciar servidor de desenvolvimento · Start dev server