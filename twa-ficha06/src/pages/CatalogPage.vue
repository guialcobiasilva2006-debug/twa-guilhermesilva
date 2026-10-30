<template>
  <div>
    <h1>Catálogo de Itens</h1>
    <div v-if="status === 'loading'">A carregar...</div>
    <div v-else-if="status === 'error'">Erro: {{ error }}</div>
    <div v-else-if="status === 'ready'">
      <div class="controls">
        <input v-model="search" placeholder="Pesquisar por nome..." />
        <select v-model="selectedCat">
          <option value="">Todas as categorias</option>
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>
      <ItemList :items="visibleItems" @select="onSelect" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ItemList from '../components/ItemList.vue'
import { items, status, error, ensureLoaded } from '../store.js'

const router = useRouter()
const search = ref('')
const selectedCat = ref('')

onMounted(() => {
  ensureLoaded()
})

const categories = computed(() => {
  if (!items.value) return []
  return [...new Set(items.value.map((i) => i.category))].filter(Boolean)
})

const visibleItems = computed(() => {
  if (!items.value) return []
  return items.value.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.value.toLowerCase())
    const matchesCat = !selectedCat.value || item.category === selectedCat.value
    return matchesSearch && matchesCat
  })
})

function onSelect(id) {
  router.push({ name: 'item', params: { id } })
}
</script>

<style scoped>
.controls {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}
</style>