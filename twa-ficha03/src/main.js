import { search, byCategory, categories, sortByPrice } from './catalog.js';

const state = {
  status: 'loading', // 'loading' | 'error' | 'ready'
  error: null,
  items: [],
  query: '',
  category: '',
  sortDir: 'desc',
  selectedId: null,
};

// Seletores do DOM
const listEl = document.querySelector('#list');
const detailEl = document.querySelector('#detail');
const searchInput = document.querySelector('#q');
const sortBtn = document.querySelector('#sort-btn');

// 1. Função load() com fetch, tratamento de erros e res.ok
async function loadData() {
  state.status = 'loading';
  render();

  try {
    const res = await fetch('/items.json');
    
    // Armadilha do Vite: ficheiros inexistentes respondem 200 com HTML (index.html)
    const contentType = res.headers.get('content-type');
    if (!res.ok || (contentType && contentType.includes('text/html'))) {
      throw new Error(`Erro HTTP ${res.status}: Não foi possível carregar os itens.`);
    }

    state.items = await res.json();
    state.status = 'ready';
  } catch (err) {
    state.status = 'error';
    state.error = err.message;
  } finally {
    render();
  }
}

// 2. Função render() - A página como uma função do estado
function render() {
  // Limpar conteúdos anteriores
  listEl.replaceChildren();
  detailEl.replaceChildren();

  if (state.status === 'loading') {
    const li = document.createElement('li');
    li.textContent = 'A carregar...';
    listEl.append(li);
    return;
  }

  if (state.status === 'error') {
    const li = document.createElement('li');
    li.textContent = `Erro: ${state.error}`;
    listEl.append(li);
    return;
  }

  // Filtrar e ordenar dados com base no state
  let visible = search(state.items, state.query);
  if (state.category) {
    visible = byCategory(visible, state.category);
  }
  visible = sortByPrice(visible, state.sortDir);

  // Construir elementos da lista de forma segura (textContent)
  const itemNodes = visible.map((item) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.dataset.id = item.id;
    li.textContent = `${item.name} - ${item.price} €`;
    
    li.addEventListener('click', () => {
      state.selectedId = item.id;
      render();
    });

    return li;
  });

  listEl.replaceChildren(...itemNodes);

  // Renderizar detalhe do item selecionado
  if (state.selectedId !== null) {
    const selectedItem = state.items.find(i => i.id === state.selectedId);
    if (selectedItem) {
      const h2 = document.createElement('h2');
      h2.textContent = selectedItem.name;

      const pPrice = document.createElement('p');
      pPrice.textContent = `Preço: ${selectedItem.price} €`;

      detailEl.append(h2, pPrice);
    }
  }
}

// 3. Eventos que alteram o state e chamam render()
searchInput.addEventListener('input', (e) => {
  state.query = e.target.value;
  render();
});

sortBtn.addEventListener('click', () => {
  state.sortDir = state.sortDir === 'desc' ? 'asc' : 'desc';
  render();
});

// Iniciar o carregamento dos dados
loadData();
