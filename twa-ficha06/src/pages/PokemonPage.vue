<template>
  <div>
    <h1>PokéAPI — Lista Paginada</h1>
    
    <div v-if="status === 'loading'">A carregar Pokémon...</div>
    <div v-else-if="status === 'error'">Erro ao carregar: {{ error }}</div>
    <div v-else-if="data">
      <p>Page {{ page }} of {{ pages }}</p>
      
      <ul>
        <li v-for="p in data.results" :key="p.name">
          {{ p.name }}
        </li>
      </ul>

      <div class="pagination">
        <button :disabled="page <= 1" @click="go(page - 1)">Anterior</button>
        <button :disabled="page >= pages" @click="go(page + 1)">Seguinte</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLoad } from '../composables/useLoad.js'
import { list, PAGE } from '../api/pokeapi.js'

const route = useRoute()
const router = useRouter()

const page = computed(() => Number(route.query.page ?? 1))

const { status, error, data, load } = useLoad(() => list(page.value))

watch(page, load)

const pages = computed(() => Math.ceil((data.value?.count ?? 0) / PAGE))

function go(p) {
  router.push({ query: { page: p } })
}
</script>

<style scoped>
.pagination {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}
ul {
  text-transform: capitalize;
}
</style>