<script setup>
import { ref, computed, watch } from 'vue'
import { getJSON } from './api/getJSON.js'
import { useLoad } from './composables/useLoad.js'
import { search, byCategory, categories, sortByPrice } from './catalog.js'
import ItemList from './components/ItemList.vue'
import ItemDetail from './components/ItemDetail.vue'
import ItemForm from './components/ItemForm.vue'

const { status, error, data: itemsRef, load } = useLoad(() => getJSON('/items.json'))
const items = computed(() => itemsRef.value ?? [])

const query = ref('')
const category = ref('')
const sortDir = ref('desc')
const selectedId = ref(null)

watch(query, () => {
  selectedId.value = null
})

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

const nextId = computed(() => {
  return items.value.length ? Math.max(...items.value.map((i) => i.id)) + 1 : 1
})

function addItem(newItem) {
  items.value.push({ id: nextId.value, ...newItem })
  selectedId.value = nextId.value
}
</script>

<template>
  <main class="container">
    <h1>Catálogo Vue — Ficha 05</h1>

    <p v-if="status === 'loading'">A carregar o catálogo...</p>
    
    <div v-else-if="status === 'error'" class="error-box">
      <p>Erro: {{ error }}</p>
      <button @click="load">Tentar de novo</button>
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

      <ItemList 
        :items="visible" 
        :selectedId="selectedId" 
        @select="selectedId = $event" 
      />

      <ItemDetail v-if="selected" :item="selected" />

      <ItemForm :cats="cats" @save="addItem" />
    </template>
  </main>
</template>

<style scoped>
.container { max-width: 800px; margin: 2rem auto; font-family: sans-serif; }
.controls { display: flex; gap: 1rem; margin-bottom: 1.5rem; }
.error-box { color: red; }
</style>