<template>
  <div>
    <p><RouterLink to="/">&larr; Voltar à lista</RouterLink></p>
    <div v-if="status === 'loading'">Loading...</div>
    <div v-else-if="status === 'error'">Erro: {{ error }}</div>
    <div v-else-if="!item">Item {{ id }} not found</div>
    <div v-else>
      <ItemDetail :item="item" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ItemDetail from '../components/ItemDetail.vue'
import { items, status, error, ensureLoaded } from '../store.js'

const route = useRoute()

onMounted(() => {
  ensureLoaded()
})

const id = computed(() => Number(route.params.id))
const item = computed(() => (items.value ?? []).find((i) => i.id === id.value))
</script>