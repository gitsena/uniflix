import { renderFilmes } from './ui.js';
import { setupFilters } from './filters.js';
import { openFilmeModal } from './modals/filmeModal.js';

document.addEventListener('DOMContentLoaded', () => {
  setupFilters();
  renderFilmes();

  document.getElementById('btnAddFilme').addEventListener('click', () => {
    openFilmeModal();
  });
});
