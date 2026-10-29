# Ficha 05 — Componentes e Formulários em Vue · Components and forms in Vue

Aula 05 (22/10/2026) · Licenciatura em Engenharia Informática, ISLA Gaia[cite: 3]

PT — Aplicação web desenvolvida em Vue 3 (`<script setup>`, `<template>`, `<style scoped>`). Evolução da arquitetura da aplicação através da divisão do componente principal em componentes filhos (`ItemList.vue`, `ItemDetail.vue`, `ItemForm.vue`) com fluxo de dados unidirecional (`defineProps` e `defineEmits`). Introdução de formulários reativos com validação cruzada (HTML e `computed`), encapsulamento do carregamento assíncrono num composable reutilizável (`useLoad.js`) baseado em ciclo de vida (`onMounted`), e utilização de `watch` para efeitos reativos.

EN — Web application developed with Vue 3 (`<script setup>`, `<template>`, `<style scoped>`). Architecture evolution by splitting the main component into child components (`ItemList.vue`, `ItemDetail.vue`, `ItemForm.vue`) using unidirectional data flow (`defineProps` and `defineEmits`). Introduction of reactive forms with cross-validation (HTML and `computed`), encapsulation of asynchronous data loading into a reusable composable (`useLoad.js`) based on lifecycle hooks (`onMounted`), and usage of `watch` for reactive side effects.

## Declaração de Utilização de Inteligência Artificial / AI Declaration
Declaro que utilizei ferramentas de Inteligência Artificial (IA) como apoio no desenvolvimento, estruturação, suporte técnico e esclarecimento de dúvidas para a realização desta Ficha 05.

## Como correr / How to run

```bash
npm install     # Instalar dependências · Install dependencies
npm run dev     # Iniciar servidor de desenvolvimento · Start dev server


## Perguntas de Reflexão / Reflection Questions

1. **Porque não alterar `selectedId` diretamente no `ItemList`?**
   Segui o fluxo de dados unidirecional do Vue (as props são *read-only*). Com o `emit`, aviso o componente pai para ser ele a atualizar o estado de forma limpa.

2. **Quando usar `computed` vs `watch`?**
   Uso `computed` para calcular novos valores reativos sem efeitos secundários (ex: `visible`). Uso `watch` para reagir a mudanças e executar ações (ex: limpar a seleção ao pesquisar).

3. **O que poupa o `useLoad`?**
   Poupa repetir código de `loading`, `error` e ciclo de vida em cada ecrã. Se o `onMounted` ficasse no componente, tinha de duplicar os blocos `try/catch` e estados em todas as entidades.

4. **Porquê validar em HTML, `computed` e na API? Qual protege os dados?**
   As validações em HTML e no `computed` servem para dar feedback rápido ao utilizador (UX). A validação na API é a única que protege realmente os dados, pois a do cliente pode ser contornada.

   