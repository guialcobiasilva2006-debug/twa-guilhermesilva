# Ficha 04 — O catálogo em Vue · Your catalog in Vue

Aula 04 (15/10/2026) · Licenciatura em Engenharia Informática, ISLA Gaia

PT — Aplicação web desenvolvida em Vue 3 (`<script setup>`, `<template>`, `<style scoped>`). Migração do padrão imperativo de renderização manual (Ficha 03) para o modelo reativo declarativo do Vue. O projeto reutiliza o módulo de funções puras (`catalog.js`) e mantém o carregamento assíncrono dos dados via `fetch` a partir de um ficheiro JSON, utilizando `ref` para o estado e `computed` para os valores derivados.

## Declaração de Utilização de Inteligência Artificial
**Declaro que utilizei ferramentas de Inteligência Artificial (IA) como apoio no desenvolvimento, estruturação e esclarecimento de dúvidas para a realização desta Ficha 04.**


## Como correr / How to run

```bash
npm install     # Instalar dependências · Install dependencies
npm run dev     # Iniciar servidor de desenvolvimento · Start dev server