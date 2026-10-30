import { ref } from 'vue'
import { getJSON } from './api/getJSON.js'

export const items = ref(null)
export const status = ref('idle') // 'idle' | 'loading' | 'error' | 'ready'
export const error = ref(null)

export async function load() {
  status.value = 'loading'
  error.value = null
  try {
    const data = await getJSON('./items.json')
    items.value = data
    status.value = 'ready'
  } catch (err) {
    error.value = err.message || 'Erro ao carregar dados'
    status.value = 'error'
  }
}

export function ensureLoaded() {
  if (items.value === null && status.value !== 'loading') {
    load()
  }
}

export function addItem(item) {
  const nextId = () => Math.max(0, ...(items.value || []).map((i) => i.id)) + 1
  const id = nextId()
  items.value.push({ id, ...item })
  return id
}