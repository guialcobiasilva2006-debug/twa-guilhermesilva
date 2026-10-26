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