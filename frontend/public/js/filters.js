import { renderFilmes } from './ui.js';

export function setupFilters() {
  const filtersSection = document.getElementById('filters');

  const filterHTML = `
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <input id="filterNome" type="text" placeholder="Filtrar por nome" class="input" />
      <select id="filterGenero" class="input">
        <option value="">Gênero</option>
        <option value="1">Ação</option>
        <option value="2">Drama</option>
        <option value="3">Comédia</option>
      </select>
      <select id="filterClassificacao" class="input">
        <option value="">Classificação</option>
        <option value="1">Livre</option>
        <option value="2">12 anos</option>
      </select>
    </div>
  `;

  filtersSection.innerHTML = filterHTML;

  document.querySelectorAll('#filters input, #filters select').forEach(el => {
    el.addEventListener('change', () => {
      const filtros = {
        nome: document.getElementById('filterNome').value,
        genero: document.getElementById('filterGenero').value,
        classificacao: document.getElementById('filterClassificacao').value,
      };
      renderFilmes(filtros);
    });
  });
}
