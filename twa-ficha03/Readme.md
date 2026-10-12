# Ficha 03 — O vosso catálogo no browser · Your catalog in the browser

Aula 03 (12/10/2026) · Licenciatura em Engenharia Informática, ISLA Gaia

Aplicação web em JavaScript vanilla construída com Vite. O projeto reutiliza o módulo de funções puras (`catalog.js`) da Ficha 02 e implementa o carregamento assíncrono via `fetch` de um ficheiro JSON, renderização dinâmica no DOM com gestão de estado (`state`) e tratamento de erros (estados de loading, ready e error).


O que se verifica · What to check
Async / Await e Fetch: Carregamento assíncrono de /items.json com validação de res.ok e tratamento de erros via try / catch / finally.

DOM Seguro: Construção de nós utilizando createElement e textContent (prevenção de XSS).

Padrão Render (State): A página reflete o estado atual (state com filtros de pesquisa, categorias e ordenação).

Testes: Continuação da validação com o script check.js.

Declaração de IA / AI Declaration
Declaro que foi utilizada assistência de Inteligência Artificial para apoiar na estruturação e esclarecimento de dúvidas durante o desenvolvimento desta ficha.



