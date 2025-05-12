import { createFilme } from '../api.js';
import { renderFilmes } from '../ui.js';

export function openFilmeModal(filme = null) {
  const modalRoot = document.getElementById('modalRoot');
  modalRoot.innerHTML = `
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded p-6 w-full max-w-md">
        <h2 class="text-xl mb-4">${filme ? 'Editar Filme' : 'Novo Filme'}</h2>
        <form id="filmeForm" class="space-y-4">
          <input name="nome" placeholder="Nome" class="input w-full" required />
          <input name="duracao" placeholder="Duração" class="input w-full" required />
          <textarea name="sinopse" placeholder="Sinopse" class="input w-full"></textarea>
          <div class="flex justify-end gap-2">
            <button type="button" class="bg-gray-300 px-4 py-2 rounded" onclick="document.getElementById('modalRoot').innerHTML = ''">Cancelar</button>
            <button class="bg-blue-600 text-white px-4 py-2 rounded">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  `;

  document.getElementById('filmeForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    await createFilme(data);
    document.getElementById('modalRoot').innerHTML = '';
    renderFilmes();
  });
}
