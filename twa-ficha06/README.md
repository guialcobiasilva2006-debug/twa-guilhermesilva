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



## Perguntas de Reflexão / Reflection Questions

1. **O que deixaria de funcionar com um `ref` em vez do URL (`?page=3`)?**
   Perdia-se o estado ao fazer um *reload* ou ao partilhar o link diretamente com outra pessoa.

2. **Porque desapareceu o item criado após o `reload` e o que muda no M2?**
   Manteve-se na navegação porque o `store.js` vive na memória RAM volátil. No M2, a BD/API garantirá persistência real.

3. **Quando usar `onMounted` vs `watch` nas rotas?**
   O `onMounted` corre na criação inicial do componente. O `watch` é necessário para reagir a alterações de parâmetros na mesma rota (ex: `/items/1` para `/items/2`).

4. **SPA, SSR ou SSG para o projeto e para o site da ISLA?**
   Escolheria uma **SPA** para o projeto pela interatividade e simplicidade, e **SSR/SSG** para a ISLA devido ao SEO e à velocidade de carregamento inicial.