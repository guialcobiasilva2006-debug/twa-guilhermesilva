<template>
  <div id="layout">
    <nav>
      <RouterLink to="/">Catálogo</RouterLink> | 
      <RouterLink to="/items/new">Novo Item</RouterLink> | 
      <RouterLink to="/pokemon">Pokémon</RouterLink>
    </nav>
    <hr />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
#layout {
  font-family: sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
nav a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}
nav a.router-link-active {
  color: #42b983;
}
</style>