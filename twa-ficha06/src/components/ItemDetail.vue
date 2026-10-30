<script setup>
defineProps({
  item: { type: Object, required: true }
})
</script>

<template>
  <section v-if="item" id="detail">
    <h2>{{ item.name }}</h2>
    <p>Preço: {{ item.price }} €</p>
    <p>Categoria: {{ item.category }}</p>
    <p v-if="item.tags">Tags: {{ item.tags.join(', ') }}</p>
  </section>
</template>