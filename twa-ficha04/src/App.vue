<script setup>
import { ref, computed } from 'vue'
import { search, byCategory, categories, sortByPrice } from './catalog.js'

const status = ref('loading')
const error = ref(null)
const items = ref([])
const query = ref('')
const category = ref('')
const sortDir = ref('desc')
const selectedId = ref(null)

async function loadData() {
  status.value = 'loading'
  error.value = null

  try {
    const res = await fetch('/items.json')
    const contentType = res.headers.get('content-type')
    
    if (!res.ok || (contentType && contentType.includes('text/html'))) {
      throw new Error(`Erro HTTP ${res.status}: Não foi possível carregar os itens.`)
    }

    items.value = await res.json()
    status.value = 'ready'
  } catch (err) {
    status.value = 'error'
    error.value = err.message
  }
}

const cats = computed(() => categories(items.value))

const visible = computed(() => {
  let result = search(items.value, query.value)
  if (category.value) {
    result = byCategory(result, category.value)
  }
  return sortByPrice(result, sortDir.value)
})

const selected = computed(() => {
  return items.value.find((i) => i.id === selectedId.value)
})

loadData()
</script>

<template>
  <main class="container">
    <h1>Catálogo Vue</h1>

    <p v-if="status === 'loading'">A carregar o catálogo...</p>
    
    <div v-else-if="status === 'error'" class="error-box">
      <p>Erro: {{ error }}</p>
      <button @click="loadData">Tentar de novo</button>
    </div>

    <template v-else-if="status === 'ready'">
      <div class="controls">
        <input v-model="query" type="search" placeholder="Pesquisar itens..." />

        <select v-model="category">
          <option value="">Todas as categorias</option>
          <option v-for="c in cats" :key="c" :value="c">{{ c }}</option>
        </select>

        <button @click="sortDir = sortDir === 'desc' ? 'asc' : 'desc'">
          Ordenar: {{ sortDir === 'desc' ? 'Preço Descendente' : 'Preço Ascendente' }}
        </button>
      </div>

      <ul id="list">
        <li 
          v-for="item in visible" 
          :key="item.id"
          :class="{ selected: item.id === selectedId }"
          @click="selectedId = item.id"
        >
          {{ item.name }} — {{ item.price }} €
        </li>
      </ul>

      <section v-if="selected" id="detail">
        <h2>{{ selected.name }}</h2>
        <p>Preço: {{ selected.price }} €</p>
        <p>Categoria: {{ selected.category }}</p>
      </section>
    </template>
  </main>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  font-family: sans-serif;
}
.controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 0.5rem;
  margin-bottom: 0.3rem;
  background: #f4f4f4;
  cursor: pointer;
  border-radius: 4px;
}
li:hover {
  background: #e2e2e2;
}
li.selected {
  background: #d0e8ff;
  font-weight: bold;
}
.error-box {
  color: red;
}
</style>