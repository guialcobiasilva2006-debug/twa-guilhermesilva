import { writeFile } from 'fs/promises';

try {
  // 1. Fazer o pedido à API pública do GitHub sobre o Node.js
  const res = await fetch('https://api.github.com/repos/nodejs/node');
  
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  const repo = await res.json();
  console.log('Nome do Repositório:', repo.name, '| Estrelas:', repo.stargazers_count);

  // 2. Extração de alguns campos e guardar no ficheiro repo.json
  const dataToSave = {
    name: repo.name,
    full_name: repo.full_name,
    description: repo.description,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    html_url: repo.html_url
  };

  await writeFile('repo.json', JSON.stringify(dataToSave, null, 2));
  console.log('Ficheiro repo.json guardado com sucesso!');
} catch (error) {
  console.error('Erro na requisição:', error);
}