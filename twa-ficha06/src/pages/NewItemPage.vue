<template>
  <div>
    <h1>Adicionar Novo Item</h1>
    <ItemForm :cats="categories" @save="onSave" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import ItemForm from '../components/ItemForm.vue'
import { items, addItem } from '../store.js'

const router = useRouter()

const categories = computed(() => {
  if (!items.value) return ['Geral', 'Eletrónica', 'Livros']
  return [...new Set(items.value.map((i) => i.category))].filter(Boolean)
})

function onSave(itemData) {
  const newId = addItem(itemData)
  router.push({ name: 'item', params: { id: newId } })
}
</script>