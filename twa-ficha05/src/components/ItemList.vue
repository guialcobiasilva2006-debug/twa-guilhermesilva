<script setup>
defineProps({
  items: { type: Array, required: true },
  selectedId: { type: Number, default: null },
})
defineEmits(['select'])
</script>

<template>
  <ul id="list">
    <li 
      v-for="item in items" 
      :key="item.id"
      :class="{ selected: item.id === selectedId }"
      @click="$emit('select', item.id)"
    >
      {{ item.name }} — {{ item.price }} €
    </li>
  </ul>
</template>

<style scoped>
ul { list-style-type: none; padding: 0; }
li { padding: 0.5rem; margin-bottom: 0.3rem; background: #f4f4f4; cursor: pointer; border-radius: 4px; }
li:hover { background: #e2e2e2; }
li.selected { background: #d0e8ff; font-weight: bold; }
</style>