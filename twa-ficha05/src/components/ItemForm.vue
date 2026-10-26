<script setup>
import { computed, reactive } from 'vue'

defineProps({ cats: { type: Array, required: true } })
const emit = defineEmits(['save'])

const empty = { name: '', category: '', price: null, tags: '' }
const form = reactive({ ...empty })

const errors = computed(() => {
  const e = {}
  if (form.name.length < 3) e.name = 'pelo menos 3 caracteres'
  if (!form.category) e.category = 'escolhe uma categoria'
  if (!(form.price > 0)) e.price = 'tem de ser > 0'
  return e
})

const isValid = computed(() => Object.keys(errors.value).length === 0)

function submit() {
  if (!isValid.value) return
  emit('save', {
    name: form.name,
    category: form.category,
    price: Number(form.price),
    tags: form.tags ? form.tags.split(',').map(t => t.trim()).filter(Boolean) : []
  })
  Object.assign(form, empty)
}
</script>

<template>
  <form @submit.prevent="submit" class="form-box">
    <h3>Adicionar Novo Item</h3>
    <div>
      <input v-model.trim="form.name" required minlength="3" placeholder="Nome do item" />
      <small v-if="errors.name" class="error">{{ errors.name }}</small>
    </div>
    <div>
      <select v-model="form.category" required>
        <option value="" disabled>Escolhe uma categoria</option>
        <option v-for="c in cats" :key="c" :value="c">{{ c }}</option>
      </select>
      <small v-if="errors.category" class="error">{{ errors.category }}</small>
    </div>
    <div>
      <input v-model.number="form.price" type="number" min="0" step="0.01" required placeholder="Preço" />
      <small v-if="errors.price" class="error">{{ errors.price }}</small>
    </div>
    <div>
      <input v-model.trim="form.tags" placeholder="tags, separadas por vírgulas" />
    </div>
    <button type="submit" :disabled="!isValid">Guardar</button>
  </form>
</template>

<style scoped>
.form-box { margin-top: 1.5rem; padding: 1rem; background: #fafafa; border: 1px solid #ddd; border-radius: 4px; }
.form-box div { margin-bottom: 0.8rem; }
.form-box input, .form-box select { padding: 0.4rem; width: 100%; max-width: 300px; display: block; }
.error { color: red; font-size: 0.8rem; display: block; }
</style>