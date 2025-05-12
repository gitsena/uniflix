import { fetchFilmes } from './api.js';

export async function renderFilmes(filtros = {}) {
  const container = document.getElementById('filmeList');
  container.innerHTML = '<p>Carregando...</p>';

  const filmes = await fetchFilmes(filtros);

  container.innerHTML = filmes.map(filme => `
    <div class="bg-white shadow p-4 rounded">
      <img src="./assets/${filme.foto_capa}" alt="${filme.nome}" class="w-full h-48 object-cover rounded" />
      <h3 class="text-xl font-semibold mt-2">${filme.nome}</h3>
      <p class="text-sm text-gray-600">${filme.sinopse}</p>
      <div class="mt-4 flex justify-between">
        <button class="bg-yellow-400 px-3 py-1 rounded text-sm">Editar</button>
        <button class="bg-red-500 px-3 py-1 rounded text-sm text-white">Excluir</button>
      </div>
    </div>
  `).join('');
}
